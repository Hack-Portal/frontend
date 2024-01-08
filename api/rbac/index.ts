/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** List Policies */
  get: {
    query?: {
      act?: string[] | undefined
      eft?: string[] | undefined
      obj?: string[] | undefined
      sub?: string[] | undefined
    } | undefined

    status: 200
    /** success response */
    resBody: Types.Response_ListRbacPolicies
  }

  /** Create RBACPolicy */
  post: {
    status: 200
    /** success response */
    resBody: Types.Response_CreateRbacPolicy
    /** request body */
    reqBody: Types.Request_CreateRbacPolicy
  }

  /** DeleteAll Policies */
  delete: {
    status: 200
    /** success response */
    resBody: Types.Response_DeleteAllRbacPolicies
  }
}
