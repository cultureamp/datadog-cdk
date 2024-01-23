// Generated by cdk-import
import * as cdk from "aws-cdk-lib"
import type * as constructs from "constructs"

/* eslint-disable @typescript-eslint/naming-convention */

/**
 * Datadog Application User 1.2.0
 *
 * @schema CfnUserProps
 */
export interface CfnUserProps {
  /**
   * Credentials for the Datadog API
   *
   * @schema CfnUserProps#DatadogCredentials
   */
  readonly datadogCredentials: CfnUserPropsDatadogCredentials

  /**
   * The role of the user
   *
   * @schema CfnUserProps#AccessRole
   */
  readonly accessRole?: CfnUserPropsAccessRole

  /**
   * User email
   *
   * @schema CfnUserProps#Email
   */
  readonly email?: string

  /**
   * User handle (a valid email)
   *
   * @schema CfnUserProps#Handle
   */
  readonly handle: string

  /**
   * User name
   *
   * @schema CfnUserProps#Name
   */
  readonly name?: string
}

/**
 * Converts an object of type 'CfnUserProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_CfnUserProps(
  obj: CfnUserProps | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined
  }
  const result = {
    DatadogCredentials: toJson_CfnUserPropsDatadogCredentials(
      obj.datadogCredentials
    ),
    AccessRole: obj.accessRole,
    Email: obj.email,
    Handle: obj.handle,
    Name: obj.name,
  }
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  )
}
/* eslint-enable max-len, quote-props */

/**
 * Credentials for the Datadog API
 *
 * @schema CfnUserPropsDatadogCredentials
 */
export interface CfnUserPropsDatadogCredentials {
  /**
   * Datadog API key
   *
   * @schema CfnUserPropsDatadogCredentials#ApiKey
   */
  readonly apiKey: string

  /**
   * Datadog application key
   *
   * @schema CfnUserPropsDatadogCredentials#ApplicationKey
   */
  readonly applicationKey: string

  /**
   * Datadog API URL (defaults to https://api.datadoghq.com)
   *
   * @schema CfnUserPropsDatadogCredentials#ApiURL
   */
  readonly apiUrl?: string
}

/**
 * Converts an object of type 'CfnUserPropsDatadogCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_CfnUserPropsDatadogCredentials(
  obj: CfnUserPropsDatadogCredentials | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined
  }
  const result = {
    ApiKey: obj.apiKey,
    ApplicationKey: obj.applicationKey,
    ApiURL: obj.apiUrl,
  }
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  )
}
/* eslint-enable max-len, quote-props */

/**
 * The role of the user
 *
 * @schema CfnUserPropsAccessRole
 */
export enum CfnUserPropsAccessRole {
  /** adm */
  ADM = "adm",
  /** ro */
  RO = "ro",
  /** st */
  ST = "st",
}

/**
 * A CloudFormation `Datadog::IAM::User`
 *
 * @cloudformationResource Datadog::IAM::User
 * @stability external
 */
export class CfnUser extends cdk.CfnResource {
  /**
   * The CloudFormation resource type name for this resource class.
   */
  public static readonly CFN_RESOURCE_TYPE_NAME = "Datadog::IAM::User"

  /**
   * Resource props.
   */
  public readonly props: CfnUserProps

  /**
   * Attribute `Datadog::IAM::User.Disabled`
   */
  public readonly attrDisabled: cdk.IResolvable
  /**
   * Attribute `Datadog::IAM::User.Verified`
   */
  public readonly attrVerified: cdk.IResolvable

  /**
   * Create a new `Datadog::IAM::User`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnUserProps) {
    super(scope, id, {
      type: CfnUser.CFN_RESOURCE_TYPE_NAME,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- null return as parameter is not null
      properties: toJson_CfnUserProps(props)!,
    })

    this.props = props

    this.attrDisabled = this.getAtt("Disabled")
    this.attrVerified = this.getAtt("Verified")
  }
}
