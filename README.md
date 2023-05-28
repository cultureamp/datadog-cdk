# datadog-cdk

CDK constructs for the [DataDog CFN resources](https://github.com/DataDog/datadog-cloudformation-resources).

> In order to use these resources, you need to ensure that they are configured
> in your environment. See instructions in the above repo.

Currently support AWS CDK v1 (v2 coming) on the following resource types:

- `Datadog::Dashboards::Dashboard`
- `Datadog::Monitors::Monitor`
- `Datadog::Monitors::Downtime`
- `Datadog::IAM::User`
- `Datadog::SLOs::SLO`
  - `Creator` attribute not directly supported (use an escape hatch)

## Status

This package is currently released as a public package on the Github NPM repository.

Still to be considered v1:

- [ ] unit tests for all L1 constructs
- [ ] integration tests for all L1 constructs

## Contributing

Contributions are welcome: be sure to open an issue though before embarking on
any large-scale endeavours!
