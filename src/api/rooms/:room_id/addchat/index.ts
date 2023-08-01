/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Add Chat Room */
  post: {
    status: 200
    /** success response */
    resBody: Types.Api_GetRoomResponse
    /** add chat Room Request body */
    reqBody: Types.Api_AddChatRequestBody
  }
}
