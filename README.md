# datadog-cdk

CDK constructs for the [DataDog CFN resources](https://github.com/DataDog/datadog-cloudformation-resources).

> In order to use these resources, you need to ensure that they are configured
> in your environment. See instructions in the above repo.

Currently supports AWS CDK v2 [^1] on the following resource types:

- `Datadog::Dashboards::Dashboard`
- `Datadog::Monitors::Monitor`
- `Datadog::Monitors::Downtime`
- `Datadog::IAM::User`
- `Datadog::SLOs::SLO`
  - `Creator` attribute not directly supported (use an escape hatch)

[^1]: v1 support is present via the v1.0.0 release of the package

## Status

This package is currently released as a public package on the Github NPM repository.

Contributions welcome for:

- [ ] unit tests for all L1 constructs
- [ ] integration tests for all L1 constructs

## Contributing

Contributions are welcome: be sure to open an issue though before embarking on
any large-scale endeavours!

### Local development

Ensure devbox is set up as per [Local Dev Environments (LDEs) — Getting Started](https://cultureamp.atlassian.net/wiki/spaces/DE/pages/3342434338/Devbox+setup).

Install dependencies:

    devbox run setup

## Publishing

Publishing requires a GH token in the environment named `GITHUB_REGISTRY_PUBLISH_TOKEN`. It requires `repo` and `write:packages` permissions.

```shell
pnpm run prebuildpackage
npm publish
```
