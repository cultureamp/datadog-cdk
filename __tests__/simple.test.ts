import * as cdk from "@aws-cdk/core"
import { Template } from "@aws-cdk/assertions"

describe("Dummy test", () => {
  test("can synth", () => {
    const app = new cdk.App()
    const stack = new cdk.Stack(app, "TestStack")

    const template = Template.fromStack(stack)

    expect(template).toMatchInlineSnapshot(`{}`)
  })
})
