import {
  Domain_CreateRoomRequestBody,
  Domain_GetRoomResponse,
  Domain_ListRoomResponse,
  Domain_UpdateRoomRequestBody,
} from '@/api/@types'

export interface RoomInterface {
  fetchAll(token: string): Promise<Domain_ListRoomResponse[]>
  fetchById(id: string, token: string): Promise<Domain_GetRoomResponse>
  create(
    roomInfo: Domain_CreateRoomRequestBody,
    token: string,
  ): Promise<Domain_GetRoomResponse>
  update(
    roomId: string,
    roomInfo: Domain_UpdateRoomRequestBody,
    token: string,
  ): Promise<Domain_GetRoomResponse>
  createChatMessage(
    token: string,
    uid: string,
    roomId: string,
    message: string,
  ): Promise<void>
}
