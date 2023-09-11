import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { RoomRepository } from '@/repositories/RoomRepository'

import { RoomAccountRepository } from '@/repositories/RoomAcount'
import { Domain_ListRoomResponse } from '@/api/@types'

export class RoomDetailService {
  // このクラス内でRoomRepositoryを使うために、RoomRepositoryをインスタンス化しておく
  private roomRepository: RoomRepository
  private firebaseRepository: FirebaseRepository
  private roomAccountRepository: RoomAccountRepository

  constructor() {
    this.roomRepository = RoomRepository.getInstance()
    this.firebaseRepository = FirebaseRepository.getInstance()
    this.roomAccountRepository = RoomAccountRepository.getInstance()
  }

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

  public async createChatMessage(roomId: string, message: string) {
    const token = await this.firebaseRepository.getToken()
    const uid = await this.firebaseRepository.getUId()
    if (!token) throw new Error('トークンが存在しません')

    try {
      await this.roomRepository.createChatMessage(token, uid, roomId, message)
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
    }
  }
}
