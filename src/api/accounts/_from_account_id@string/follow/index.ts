/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Get follow account */
  get: {
    query?: {
      mode?: boolean | undefined
      page_id?: string | undefined
      page_size?: string | undefined
    } | undefined

    status: 200
    /** success response */
    resBody: Types.Domain_FollowResponse[]
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
    query: {
      account_id: string
    }

    status: 200
    /** success response */
    resBody: Types.Controller_SuccessResponse
  }
}
