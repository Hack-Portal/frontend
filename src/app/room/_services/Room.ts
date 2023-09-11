import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { RoomRepository } from '@/repositories/RoomRepository'
import { PostRoom } from '../_types/postroom'
import { RoomAccountRepository } from '@/repositories/RoomAcount'
import { Domain_ListRoomResponse } from '@/api/@types'
import { RoomInterface } from '@/types/RoomInterface'
import { FirebaseInterface } from '@/types/FirebaseInterface'
import { RoomAccountInterface } from '@/types/RoomAccountInterface'

export class RoomService {
  // このクラス内でRoomRepositoryを使うために、RoomRepositoryをインスタンス化しておく
  private roomRepository: RoomInterface
  private firebaseRepository: FirebaseInterface
  private roomAccountRepository: RoomAccountInterface

  constructor(
    RoomRepository: RoomInterface,
    FirebaseRepository: FirebaseInterface,
    RoomAccountRepository: RoomAccountInterface,
  ) {
    this.roomRepository = RoomRepository
    this.firebaseRepository = FirebaseRepository
    this.roomAccountRepository = RoomAccountRepository
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

  public async join(room: Domain_ListRoomResponse, callback: () => void) {
    const user = await this.firebaseRepository.getCurrentUser()
    if (!user) throw new Error('ユーザーが存在しません')
    // 既に参加している場合
    if (room.now_member?.some((member) => member.account_id === user.uid)) {
      callback()
      return room
    }

    const roomId = room?.rooms?.room_id as string

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
