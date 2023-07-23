/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Add Account In Rooms */
  post: {
    status: 200
    /** succsss response */
    resBody: Types.Db_CreateRoomTxResult
  }

  /** Remove Account In Rooms */
  delete: {
    status: 200
    /** succsss response */
    resBody: Types.Api_DeleteResponse
  }
}
