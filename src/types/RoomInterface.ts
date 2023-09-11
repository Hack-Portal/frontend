import { Domain_CreateRoomRequestBody, Domain_GetRoomResponse, Domain_ListRoomResponse } from '@/api/@types'

export interface RoomInterface {
  fetchAll(token:string): Promise<Domain_ListRoomResponse[]>
  fetchById(id:string,token:string): Promise<Domain_GetRoomResponse>
  create(roomInfo:Domain_CreateRoomRequestBody,token:string): Promise<Domain_GetRoomResponse>
  createChatMessage(token:string,uid:string,roomId:string,message:string): Promise<void>
}
