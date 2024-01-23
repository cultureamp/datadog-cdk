import * as cdk from "aws-cdk-lib"

import { CfnSlo, CfnSloPropsType, ThresholdTimeframe } from "../src"

const app = new cdk.App()
const stack = new cdk.Stack(app, "datadogcdk-integration-slo-metric")

// create a metric-based SLO

new CfnSlo(stack, "TestSlo", {
  name: "cdk-integration-test-slo",
  thresholds: [
    {
      target: 99.9,
      timeframe: ThresholdTimeframe.VALUE_7D,
      targetDisplay: "99.0",
    },
  ],
  type: CfnSloPropsType.METRIC,
  query: {
    denominator: "count:trace.rack.request{env:test,service:datadog-cdk}",
    numerator:
      "count(v: v<0.1):trace.rack.request{env:test,service:datadog-cdk}",
  },
  // tag for visibility if the SLO sticks around
  tags: ["repo:datadog-cdk", "env:test", "type:cdk-integration-test"],
})
