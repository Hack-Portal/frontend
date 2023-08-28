import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { RoomRepository } from '@/repositories/RoomRepository'

import { RoomAccountRepository } from '@/repositories/RoomAcount'
import { Domain_ListRoomResponse } from '@/api/@types'

export class RoomService {
  // このクラス内でRoomRepositoryを使うために、RoomRepositoryをインスタンス化しておく
  private roomRepository: RoomRepository
  private firebaseRepository: FirebaseRepository
  private roomAccountRepository: RoomAccountRepository

  constructor() {
    this.roomRepository = RoomRepository.getInstance()
    this.firebaseRepository = FirebaseRepository.getInstance()
    this.roomAccountRepository = RoomAccountRepository.getInstance()
  }

  public async fetch(roomId: string) {
    const token = await this.firebaseRepository.getToken()
    try {
      const rooms = await this.roomRepository.fetchById(roomId,token)
      return rooms
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
    }
  }

}
