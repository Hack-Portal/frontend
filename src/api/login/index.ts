/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** Login User */
  post: {
    status: 200
    /** success response */
    resBody: Types.Domain_CreateUserResponse
    /** List Rooms Request */
    reqBody: Types.Domain_CreateUserRequest
  }
}
