import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { RoomRepository } from '@/repositories/RoomRepository'
import { PostRoom } from '../_types/postroom'
import { RoomAccountRepository } from '@/repositories/RoomAcount'

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

  public async fetchAll() {
    const token = await this.firebaseRepository.getToken()
    try {
      const rooms = await this.roomRepository.fetchAll(token)
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

      return rooms
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
    }
  }

  public async join(roomId: string, callback: () => void) {
    const user = await this.firebaseRepository.getCurrentUser()
    if (!user) throw new Error('ユーザーが存在しません')

    const token = await this.firebaseRepository.getToken()

    try {
      const rooms = await this.roomAccountRepository.join(
        roomId,
        user.uid,
        token,
      )
        callback()
      return rooms
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
    }
  }
}
