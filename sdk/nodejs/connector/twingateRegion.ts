// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
import * as utilities from "../utilities";

import * as pulumiGoogleNative from "@pulumi/google-native";

export class TwingateRegion extends pulumi.ComponentResource {
    /** @internal */
    public static readonly __pulumiType = 'google-twingate:connector:TwingateRegion';

    /**
     * Returns true if the given object is an instance of TwingateRegion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TwingateRegion {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TwingateRegion.__pulumiType;
    }

    /**
     * The subnetwork resource.
     */
    public /*out*/ readonly addresses!: pulumi.Output<pulumiGoogleNative.compute.v1.Address[]>;
    /**
     * The subnetwork resource.
     */
    public /*out*/ readonly instances!: pulumi.Output<pulumiGoogleNative.compute.v1.Instance[]>;
    /**
     * The subnetwork resource.
     */
    public /*out*/ readonly subnetwork!: pulumi.Output<pulumiGoogleNative.compute.v1.Subnetwork>;

    /**
     * Create a TwingateRegion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TwingateRegionArgs, opts?: pulumi.ComponentResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.cidr === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cidr'");
            }
            if ((!args || args.connectors === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectors'");
            }
            if ((!args || args.network === undefined) && !opts.urn) {
                throw new Error("Missing required property 'network'");
            }
            if ((!args || args.project === undefined) && !opts.urn) {
                throw new Error("Missing required property 'project'");
            }
            if ((!args || args.region === undefined) && !opts.urn) {
                throw new Error("Missing required property 'region'");
            }
            resourceInputs["cidr"] = args ? args.cidr : undefined;
            resourceInputs["connectors"] = args ? args.connectors : undefined;
            resourceInputs["network"] = args ? args.network : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["addresses"] = undefined /*out*/;
            resourceInputs["instances"] = undefined /*out*/;
            resourceInputs["subnetwork"] = undefined /*out*/;
        } else {
            resourceInputs["addresses"] = undefined /*out*/;
            resourceInputs["instances"] = undefined /*out*/;
            resourceInputs["subnetwork"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TwingateRegion.__pulumiType, name, resourceInputs, opts, true /*remote*/);
    }
}

/**
 * The set of arguments for constructing a TwingateRegion resource.
 */
export interface TwingateRegionArgs {
    /**
     * CIDR of the created subnetwork.
     */
    cidr: pulumi.Input<string>;
    /**
     * CIDR of the created subnetwork.
     */
    connectors: pulumi.Input<pulumi.Input<inputs.connector.TwingateConnectorArgs>[]>;
    /**
     * The GCP network id.
     */
    network: pulumi.Input<string>;
    /**
     * The GCP project id.
     */
    project: pulumi.Input<string>;
    /**
     * The GCP region.
     */
    region: pulumi.Input<string>;
}
