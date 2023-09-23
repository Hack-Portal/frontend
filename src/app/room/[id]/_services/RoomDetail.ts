import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { RoomRepository } from '@/repositories/RoomRepository'

import { RoomAccountRepository } from '@/repositories/RoomAcount'
import { Domain_ListRoomResponse, Domain_UpdateRoomRequestBody } from '@/api/@types'
import { RoomInterface } from '@/types/RoomInterface'
import { FirebaseInterface } from '@/types/FirebaseInterface'

export class RoomDetailService {
  private roomRepository: RoomInterface
  private firebaseRepository: FirebaseInterface

  constructor(RoomRepository: RoomInterface, FirebaseRepository: FirebaseInterface) {
    this.roomRepository = RoomRepository
    this.firebaseRepository = FirebaseRepository
  }

  /**
   *  ルーム詳細情報を取得する
   * @param roomId 
   * @returns 
   */
  public async fetchById(roomId: string) {
    const token = await this.firebaseRepository.getToken()
    if (!token) throw new Error('トークンが存在しません')

    try {
      const rooms = await this.roomRepository.fetchById(roomId, token)
      return rooms
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
    }
  }

  /**
   *  ルーム詳細情報を更新する
   * @param roomId 
   * @returns 
   */
  public async update(roomId: string,roomInfo:Domain_UpdateRoomRequestBody) {
    const token = await this.firebaseRepository.getToken()
    if (!token) throw new Error('トークンが存在しません')

    try {
      const rooms = await this.roomRepository.update(roomId,roomInfo, token)
      return rooms
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
    }
  }
}
