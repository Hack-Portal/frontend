/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Return a user from the id specified in the path */
  get: {
    status: 200
    /** Get success response */
    resBody: Types.Api_GetAccountResponses
  }

  /** Update user info from requested body */
  put: {
    status: 200
    /** Update succsss response */
    resBody: Types.Api_UpdateAccountResponse
    /** Update Account Request Body */
    reqBody: Types.Api_UpdateAccountRequestBody
  }

  /** Only you can delete your account (logical delete) */
  delete: {
    status: 200
    /** delete succsss response */
    resBody: Types.Api_DeleteResponse
  }
}
