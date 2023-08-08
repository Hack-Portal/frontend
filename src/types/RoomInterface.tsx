import { Api_GetRoomResponse, Db_ListRoomTxResult } from '@/api/@types'

export interface RoomInterface {
  fetchAll(): Promise<Db_ListRoomTxResult[][]>
}
