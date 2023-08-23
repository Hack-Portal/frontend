/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Get follow account */
  get: {
    status: 200
    /** success response */
    resBody: Types.Domain_FollowResponse[]
    reqFormat: URLSearchParams

    reqBody: {
      mode?: boolean | undefined
      page_id?: string | undefined
      page_size?: string | undefined
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
      account_id: string
    }
  }
}
