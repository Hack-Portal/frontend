/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Add Account In Rooms */
  post: {
    status: 200
    /** success response */
    resBody: Types.Controller_SuccessResponse
    /** add account in room Request body */
    reqBody: Types.Domain_AddAccountInRoomRequestBody
  }

  /** Remove Account In Rooms */
  delete: {
    status: 200
    /** success response */
    resBody: Types.Controller_SuccessResponse
  }
}
