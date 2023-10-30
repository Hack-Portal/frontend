/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** CloseRoom */
  post: {
    status: 200
    /** success response */
    resBody: Types.Controller_SuccessResponse
    /** Close Room Request body */
    reqBody: Types.Domain_CloseRoomRequest
  }

  /** Remove Account In Rooms */
  delete: {
    query?: {
      account_id?: string | undefined
    } | undefined

    status: 200
    /** success response */
    resBody: Types.Controller_SuccessResponse
  }
}
