# datadog-cdk

CDK constructs for the [DataDog CFN resources](https://github.com/DataDog/datadog-cloudformation-resources).

Currently support AWS CDK v1 (v2 coming) on the following resource types:

- `Datadog::Dashboards::Dashboard`
- `Datadog::Monitors::Monitor`
- `Datadog::Monitors::Downtime`
- `Datadog::IAM::User`
- `Datadog::SLOs::SLO`
  - `Creator` attribute not directly supported (use an escape hatch)
