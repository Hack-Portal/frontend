/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Get Room */
  get: {
    status: 200
    /** succsss response */
    resBody: Types.Api_GetRoomResponse
  }

  /** update Room */
  put: {
    status: 200
    /** succsss response */
    resBody: Types.Api_GetRoomResponse
    /** update Room Request body */
    reqBody: Types.Api_UpdateRoomRequestBody
  }

  /** delete Room */
  delete: {
    status: 200
    /** succsss response */
    resBody: Types.Api_DeleteResponse
  }
}
