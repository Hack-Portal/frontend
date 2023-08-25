import { Domain_CreateRoomRequestBody, Domain_GetRoomResponse, Domain_ListRoomResponse } from '@/api/@types'

export interface RoomInterface {
  fetchAll(token:string): Promise<Domain_ListRoomResponse[]>
  create(roomInfo:Domain_CreateRoomRequestBody,token:string): Promise<Domain_GetRoomResponse>
}
