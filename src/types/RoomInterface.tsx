import { Domain_GetRoomResponse, Domain_ListRoomResponse } from '@/api/@types'

export interface RoomInterface {
  fetchAll(): Promise<Domain_ListRoomResponse[]>
}
