import axios from 'axios'
import aspida from '@aspida/axios'
import { getAuthorizationHeader } from '../utils/headerManager'
import { RoomInterface } from '@/types/RoomInterface'
import { FirebaseRepository } from './FirebaseRepository'
import api from '@/api/$api'
import { Domain_CreateRoomRequestBody } from '@/api/@types'
import { RoomAccountInterface } from '@/types/RoomAccount'

export class RoomAccountRepository implements RoomAccountInterface {
  private static instance: RoomAccountRepository
  private authorization: string | null = null

  public static getInstance(): RoomAccountRepository {
    if (!RoomAccountRepository.instance) {
      RoomAccountRepository.instance = new RoomAccountRepository()
    }
    return RoomAccountRepository.instance
  }

  public async join(roomId: string,accountId:string,token: string) {
    try{
      const client = api(
        aspida(axios, {
          baseURL: process.env.NEXT_PUBLIC_TEST_URL,
          headers: {
            authorization: this.authorization,
            dbAuthorization: token,
          },
        }),
      )
      const response = await client.rooms._room_id(roomId).members.post({body: {account_id: accountId}})
      return response.body
    }catch(error){
      console.error('APIリクエストエラー:', error)
      throw error
    }
  }
}

