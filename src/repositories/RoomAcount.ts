import axios from 'axios'
import aspida from '@aspida/axios'
import api from '@/api/$api'
import { RoomAccountInterface } from '@/types/RoomAccountInterface'
import { API_URL } from '@/constants/API_URL'

export class RoomAccountRepository implements RoomAccountInterface {
  private static instance: RoomAccountRepository
  private authorization: string | null = null

  public static getInstance(): RoomAccountRepository {
    if (!RoomAccountRepository.instance) {
      RoomAccountRepository.instance = new RoomAccountRepository()
    }
    return RoomAccountRepository.instance
  }

  public async join(roomId: string, accountId: string, token: string) {
    try {
      const client = api(
        aspida(axios, {
          baseURL: API_URL,
          headers: {
            authorization: this.authorization,
            dbAuthorization: token,
          },
        }),
      )
      const response = await client.rooms
        ._room_id(roomId)
        .members.post({ body: { account_id: accountId } })
      return response.body
    } catch (error) {
      console.error('APIリクエストエラー:', error)
      throw error
    }
  }
}
