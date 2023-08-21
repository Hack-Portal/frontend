/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** Create User */
  post: {
    status: 200
    /** success response */
    resBody: Types.Domain_CreateUserResponse
    /** Create User Request */
    reqBody: Types.Domain_CreateUserRequest
  }
}
