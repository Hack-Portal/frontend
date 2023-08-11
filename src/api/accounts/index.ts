/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** Create an account from the requested body */
  post: {
    status: 200
    /** create succsss response */
    resBody: Types.Api_CreateAccountResponses
    reqFormat: FormData
    /** Create Account Request Body */
    reqBody: Types.Api_CreateAccountRequestBody
  }
}
