/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** List Account */
  get: {
    status: 200
    /** success response */
    resBody: Types.Db_ListRoomTxResult[][]
  }

  /** Create Rooms */
  post: {
    status: 200
    /** success response */
    resBody: Types.Db_CreateRoomTxResult
    /** create Room Request Body */
    reqBody: Types.Api_CreateRoomRequestBody
  }
}
