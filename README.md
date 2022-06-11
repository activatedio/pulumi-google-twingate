# Pulumi Google Twingate Component

This component provisions a set of Twingate connectors into a GCP network.
Currently it creates a dedicated subnetwork for the connectors.

This is currently a preview releaes and not recommended for production use.

More information about Twingate can be found at http://twingate.com

## Installing

This package is available in many languages in the standard packaging formats.

### Node.js (JavaScript/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

```bash
npm install @activatedio/pulumi-google-twingate
```

or `yarn`:

```bash
yarn add @activatedio/pulumi-google-twingate
```

### Python

To use from Python, install using `pip`:

```bash
pip install activatedio_pulumi_google_twingate
```

### Go

To use from Go, use `go get` to grab the latest version of the library

```bash
go get github.com/activatedio/pulumi-google-twingate/sdk
```

### .NET

To use from .NET, install using `dotnet add package`:

```bash
dotnet add package Activatedio.Pulumi.GoogleTwingate
```

## Building

This project is a component resource based on Pulumi's boilerplate
template.

## Building

### Dependencies

- Go 1.17
- NodeJS 16.X.X or later
- Python 3.6 or later
- .NET Core 3.1

This project also contains a Nix `default.nix` which can be used with nix-shell
along dir a `.envrc` file which works with direnv.

### Building locally

Run the following commands to install Go modules, generate all SDKs, and build
the provider:

```bash
make ensure
make build
```

Add the `bin` folder to your `$PATH` or copy the
`bin/pulumi-google-twingate` file to another location in your `$PATH`.

### Running an example

Navigate to one of the `examples` and run Pulumi:

```bash
cd ./exampes/simple
yarn link @activatedio/pulumi-google-twingate
pulumi up
```
