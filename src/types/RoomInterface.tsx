import { Api_GetRoomResponse } from '@/api/@types'

//何が書いてあるの
//promiseとは   https://qiita.com/soarflat/items/1a9613e023200bbebcb3
export interface RoomInterface {
  fetchAll(): Promise<Api_GetRoomResponse>
}
