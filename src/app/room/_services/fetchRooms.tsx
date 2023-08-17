import { RoomRepository } from '@/repositories/RoomRepository'

export class FetchRooms {
  // このクラス内でRoomRepositoryを使うために、RoomRepositoryをインスタンス化しておく
  private RoomRepository: RoomRepository

  constructor() {
    this.RoomRepository = RoomRepository.getInstance()
  }

  public async fetchAll() {
    try {
      const rooms = await this.RoomRepository.fetchAll()
      return rooms
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
    }
  }
}
