/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Return a account from the id specified in the path */
  get: {
    status: 200
    /** Get success response */
    resBody: Types.Domain_AccountResponses
  }

  /** Update account info from requested body */
  put: {
    status: 200
    /** Update success response */
    resBody: Types.Domain_AccountResponses
    /** Update Account Request Body */
    reqBody: Types.Domain_UpdateAccountRequest
  }

  /** Only you can delete your account (logical delete) */
  delete: {
    status: 200
    /** delete success response */
    resBody: Types.Controller_SuccessResponse
  }
}
