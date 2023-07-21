/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** ルームを作成する */
  post: {
    status: 200
    /** Successful operation */
    resBody: Types.Create_room
  }

  /** roomをすべてリストで取得する */
  get: {
    status: 200
    /** Successful operation */
    resBody: Types.List_rooms
  }
}
