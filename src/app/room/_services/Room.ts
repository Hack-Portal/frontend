import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { RoomRepository } from '@/repositories/RoomRepository'
import { PostRoom } from '../_types/postroom'

export class RoomService {
  // このクラス内でRoomRepositoryを使うために、RoomRepositoryをインスタンス化しておく
  private roomRepository: RoomRepository
  private firebaseRepository: FirebaseRepository

  constructor() {
    this.roomRepository = RoomRepository.getInstance()
    this.firebaseRepository = FirebaseRepository.getInstance()
  }

  public async fetchAll() {
    const token = await this.firebaseRepository.getToken()
    try {
      const rooms = await this.roomRepository.fetchAll(token)
      console.log(rooms);
      return rooms
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
    }
  }

  public async create(formData: PostRoom) {
    const user = await this.firebaseRepository.getCurrentUser()
    if (!user) throw new Error('ユーザーが存在しません')

    const body = { ...formData, account_id: user?.uid }
    const token = await this.firebaseRepository.getToken()

    try {
      const rooms = await this.roomRepository.create(body, token)
      console.log('rooms', rooms);
      
      return rooms
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
    }
  }
}
