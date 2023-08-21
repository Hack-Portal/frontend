/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** Create an account from the requested body */
  post: {
    status: 200
    /** create success response */
    resBody: Types.Domain_AccountResponses
    reqFormat: FormData
    /** Create Account Request */
    reqBody: Types.Domain_CreateAccountRequest
  }
}
