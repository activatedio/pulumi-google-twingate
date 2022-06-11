// Copyright 2022, Activated, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as pulumi from "@pulumi/pulumi";
import * as google from "@pulumi/google-native";

interface TwingateConnectorArgs {
  name: pulumi.Input<string>;
  zone: pulumi.Input<string>;
  accessToken: pulumi.Input<string>;
  refreshToken: pulumi.Input<string>;
}

export interface TwingateRegionArgs {
  project: pulumi.Input<string>;
  network: pulumi.Input<string>;
  region: pulumi.Input<string>;
  cidr: pulumi.Input<string>;
  connectors: TwingateConnectorArgs[];
}

export class TwingateRegion extends pulumi.ComponentResource<TwingateRegionArgs> {
  readonly subnetwork: google.compute.v1.Subnetwork;

  readonly instances: google.compute.v1.Instance[] = [];

  readonly addresses: google.compute.v1.Address[] = [];

  constructor(
    name: string,
    args: TwingateRegionArgs,
    opts?: pulumi.ComponentResourceOptions
  ) {
    super("google-twingate:connector:TwingateRegion", name, args, opts);

    const parent = { parent: this };

    var subnetworkName = `twingate-${args.region}`;

    this.subnetwork = new google.compute.v1.Subnetwork(
      subnetworkName,
      {
        name: "vpn",
        ipCidrRange: args.cidr,
        region: args.region,
        project: args.project,
        network: args.network,
      },
      parent
    );

    args.connectors.forEach((c) => {
      const startupScript = `#!/bin/bash
apt-get update
curl "https://binaries.twingate.com/connector/setup.sh" | sudo TWINGATE_ACCESS_TOKEN="${c.accessToken}" TWINGATE_REFRESH_TOKEN="${c.refreshToken}" TWINGATE_URL="https://activated.twingate.com" bash
`;

      const instanceName = `twingate-${c.name}`;

      const address = new google.compute.v1.Address(
        instanceName,
        {
          name: instanceName,
          addressType: "EXTERNAL",
          project: args.project,
          region: args.region,
        },
        parent
      );

      const instance = new google.compute.v1.Instance(
        instanceName,
        {
          name: instanceName,
          project: args.project,
          machineType: "f1-micro",
          metadata: {
            items: [
              {
                key: "startup-script",
                value: startupScript,
              },
            ],
          },
          disks: [
            {
              boot: true,
              initializeParams: {
                sourceImage:
                  "projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220530",
              },
            },
          ],
          networkInterfaces: [
            {
              network: args.network,
              subnetwork: this.subnetwork.id,
              accessConfigs: [
                {
                  natIP: address.address,
                },
              ],
            },
          ],
          serviceAccounts: [
            {
              scopes: ["https://www.googleapis.com/auth/cloud-platform"],
            },
          ],
          zone: c.zone,
        },
        parent
      );

      this.addresses.push(address);
      this.instances.push(instance);
    });
  }
}
