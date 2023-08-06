import { Api_GetRoomResponse } from '@/api/@types'

export interface RoomInterface {
  fetchAll(): Promise<Api_GetRoomResponse>
}
