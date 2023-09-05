import axios from 'axios'
import aspida from '@aspida/axios'
import { getAuthorizationHeader } from '../utils/headerManager'
import { RoomInterface } from '@/types/RoomInterface'
import { FirebaseRepository } from './FirebaseRepository'
import api from '@/api/$api'
import { Domain_CreateRoomRequestBody } from '@/api/@types'
import { API_URL } from '@/constants/API_URL'

export class RoomRepository implements RoomInterface {
  private static instance: RoomRepository
  private authorization: string | null = null

  public static getInstance(): RoomRepository {
    if (!RoomRepository.instance) {
      RoomRepository.instance = new RoomRepository()
    }
    return RoomRepository.instance
  }

  public async fetchAll(token: string) {
    try {
      const client = api(
        // aspida(axios, { baseURL: 'https://api.seaffood.com/current/v1' }),

        aspida(axios, {
          // baseURL: process.env.NEXT_PUBLIC_API_URL,
          baseURL: API_URL,
          headers: {
            // authorization: this.authorization,
            dbAuthorization: token,
          },
        }),
      )

      const response = await client.rooms.get({
        query: { page_size: 10, page_id: 1 },
      })

      return response.body
    } catch (error) {
      // エラー処理
      console.error('APIリクエストエラー:', error)
      throw error
    }
  }

  public async fetchById(id: string, token: string) {
    try {
      // console.log(id,token);
      const client = api(
        aspida(axios, {
          baseURL: API_URL,
          headers: {
            dbAuthorization: token,
          },
        }),
      )
      const response = await client.rooms._room_id(id).get()
      return response.body
    } catch (error) {
      // エラー処理
      console.error('APIリクエストエラー:', error)
      throw error
    }
  }

  public async create(roomInfo: Domain_CreateRoomRequestBody, token: string) {
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
      const response = await client.rooms.post({ body: roomInfo })
      return response.body
    } catch (error) {
      // エラー処理
      console.error('APIリクエストエラー:', error)
      throw error
    }
  }
}
