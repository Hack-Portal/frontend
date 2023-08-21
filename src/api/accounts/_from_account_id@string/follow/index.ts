/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Get follow account */
  get: {
    status: 200
    /** success response */
    resBody: Types.Controller_SuccessResponse
    reqFormat: URLSearchParams

    reqBody: {
      to_account_id: string
    }
  }

  /** Follow!!!!!!!! */
  post: {
    status: 200
    /** success response */
    resBody: Types.Repository_Follow[]
    /** create Follow Request Body */
    reqBody: Types.Domain_CreateFollowRequestBody
  }

  /** Remove follow account */
  delete: {
    status: 200
    /** success response */
    resBody: Types.Controller_SuccessResponse
    reqFormat: URLSearchParams

    reqBody: {
      to_account_id: string
    }
  }
}
