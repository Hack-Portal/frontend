/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Add Chat Room */
  post: {
    status: 200
    /** success response */
    resBody: Types.Controller_SuccessResponse
    /** add chat Room Request body */
    reqBody: Types.Domain_AddChatRequestBody
  }
}
