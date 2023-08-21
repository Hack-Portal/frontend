/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** List Rate for User */
  get: {
    query?: {
      page_id?: number | undefined
      page_size?: number | undefined
    } | undefined

    status: 200
    /** success response */
    resBody: Types.Domain_AccountRateResponse[]
  }

  /** Create Rate for User */
  post: {
    status: 200
    /** success response */
    resBody: Types.Controller_SuccessResponse
    /** Create Rate Request Body */
    reqBody: Types.Domain_CreateRateRequestBody
  }
}
