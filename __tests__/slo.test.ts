import * as cdk from "@aws-cdk/core"
import { Template } from "@aws-cdk/assertions"
import { CfnSlo, CfnSloPropsType, ThresholdTimeframe } from "../src"

const testStack = () => {
  const app = new cdk.App()
  return new cdk.Stack(app, "TestStack")
}

describe("Given an SLO construct", () => {
  describe("When I supply default values", () => {
    const stack = testStack()

    new CfnSlo(stack, "TestSlo", {
      name: "TestSlo",
      thresholds: [
        {
          target: 100,
          timeframe: ThresholdTimeframe.VALUE_7D,
          targetDisplay: "98.0",
        },
      ],
      type: CfnSloPropsType.METRIC,
    })

    test("Then the template synthesises correctly", () => {
      const template = Template.fromStack(stack)

      expect(template).toMatchSnapshot()
    })
  })

  describe("When I supply optional values", () => {
    const stack = testStack()

    new CfnSlo(stack, "TestSlo", {
      name: "TestSlo",
      thresholds: [
        {
          target: 100,
          timeframe: ThresholdTimeframe.VALUE_7D,
          targetDisplay: "98.0",
        },
      ],
      type: CfnSloPropsType.METRIC,
      description: "A test SLO",
      groups: ["TestGroup"],
      tags: ["asset:testasset"],
      monitorIds: [0, 1],
      query: {
        numerator: "numerator query",
        denominator: "denominator query",
      },
    })

    test("Then the template synthesises correctly", () => {
      const template = Template.fromStack(stack)

      expect(template).toMatchSnapshot()
    })
  })
})