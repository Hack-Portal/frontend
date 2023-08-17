/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** List Account */
  get: {
    query?: {
      page_id?: number | undefined
      page_size?: number | undefined
    } | undefined

    status: 200
    /** success response */
    resBody: Types.Domain_ListRoomResponse[]
  }

  /** Create Rooms */
  post: {
    status: 200
    /** success response */
    resBody: Types.Domain_GetRoomResponse
    /** create Room Request Body */
    reqBody: Types.Domain_CreateRoomRequestBody
  }
}
