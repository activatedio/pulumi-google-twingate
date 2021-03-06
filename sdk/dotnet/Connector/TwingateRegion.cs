// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace Activatedio.GoogleTwingate.Connector
{
    [GoogleTwingateResourceType("google-twingate:connector:TwingateRegion")]
    public partial class TwingateRegion : Pulumi.ComponentResource
    {
        /// <summary>
        /// The subnetwork resource.
        /// </summary>
        [Output("addresses")]
        public Output<ImmutableArray<Pulumi.GoogleNative.Compute.V1.Address>> Addresses { get; private set; } = null!;

        /// <summary>
        /// The subnetwork resource.
        /// </summary>
        [Output("instances")]
        public Output<ImmutableArray<Pulumi.GoogleNative.Compute.V1.Instance>> Instances { get; private set; } = null!;

        /// <summary>
        /// The subnetwork resource.
        /// </summary>
        [Output("subnetwork")]
        public Output<Pulumi.GoogleNative.Compute.V1.Subnetwork> Subnetwork { get; private set; } = null!;


        /// <summary>
        /// Create a TwingateRegion resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public TwingateRegion(string name, TwingateRegionArgs args, ComponentResourceOptions? options = null)
            : base("google-twingate:connector:TwingateRegion", name, args ?? new TwingateRegionArgs(), MakeResourceOptions(options, ""), remote: true)
        {
        }

        private static ComponentResourceOptions MakeResourceOptions(ComponentResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new ComponentResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = ComponentResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
    }

    public sealed class TwingateRegionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// CIDR of the created subnetwork.
        /// </summary>
        [Input("cidr", required: true)]
        public Input<string> Cidr { get; set; } = null!;

        [Input("connectors", required: true)]
        private InputList<Inputs.TwingateConnectorArgs>? _connectors;

        /// <summary>
        /// CIDR of the created subnetwork.
        /// </summary>
        public InputList<Inputs.TwingateConnectorArgs> Connectors
        {
            get => _connectors ?? (_connectors = new InputList<Inputs.TwingateConnectorArgs>());
            set => _connectors = value;
        }

        /// <summary>
        /// The GCP network id.
        /// </summary>
        [Input("network", required: true)]
        public Input<string> Network { get; set; } = null!;

        /// <summary>
        /// The GCP project id.
        /// </summary>
        [Input("project", required: true)]
        public Input<string> Project { get; set; } = null!;

        /// <summary>
        /// The GCP region.
        /// </summary>
        [Input("region", required: true)]
        public Input<string> Region { get; set; } = null!;

        public TwingateRegionArgs()
        {
        }
    }
}
