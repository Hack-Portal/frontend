/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Get Room */
  get: {
    status: 200
    /** success response */
    resBody: Types.Domain_GetRoomResponse
  }

  /** update Room */
  put: {
    status: 200
    /** success response */
    resBody: Types.Domain_GetRoomResponse
    /** update Room Request body */
    reqBody: Types.Domain_UpdateRoomRequestBody
  }

  /** Add Account In Rooms */
  post: {
    status: 200
    /** success response */
    resBody: Types.Controller_SuccessResponse
    /** add account in room Request body */
    reqBody: Types.Domain_AddAccountInRoomRequestBody
  }

  /** delete Room */
  delete: {
    status: 200
    /** success response */
    resBody: Types.Controller_SuccessResponse
  }
}
