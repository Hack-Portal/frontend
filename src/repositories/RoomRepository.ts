import axios from 'axios'
import aspida from '@aspida/axios'
import { getAuthorizationHeader } from '../utils/headerManager'
import { RoomInterface } from '@/types/RoomInterface'
import { FirebaseRepository } from './FirebaseRepository'
import api from '@/api/$api'
import {
  Domain_CreateRoomRequestBody,
  Domain_GetRoomResponse,
  Domain_UpdateRoomRequestBody,
} from '@/api/@types'
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

  /**
   *  全てのルームを取得します
   * @param token
   * @returns
   */
  public async fetchAll(token: string) {
    try {
      const client = api(
        aspida(axios, {
          baseURL: API_URL,
          headers: {
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

  /**
   * 指定したIDのルームを取得します
   * @param id
   * @param token
   * @returns
   */
  public async fetchById(id: string, token: string) {
    try {
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

  /**
   * ルームを作成します
   * @param roomInfo
   * @param token
   * @returns
   */
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

  /**
   * ルームの情報を更新します
   * @param roomId
   */
  public async update(
    roomId: string,
    roomInfo: Domain_UpdateRoomRequestBody,
    token: string,
  ) {
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
        .put({ body: roomInfo })
      return response.body
    } catch (error) {
      // エラー処理
      console.error('APIリクエストエラー:', error)
      throw error
    }
  }

  /**
   *
   * @param token
   * @param uid
   * @param roomId
   * @param message
   * @returns
   */
  public createChatMessage = async (
    token: string,
    uid: string,
    roomId: string,
    message: string,
  ): Promise<void> => {
    try {
      const client = api(
        aspida(axios, {
          baseURL: API_URL,
          headers: {
            dbauthorization: token,
          },
        }),
      )
      await client.rooms
        ._room_id(roomId)
        .addchat.post({ body: { message: message, account_id: uid } })
    } catch (error) {
      // エラー処理
      console.error('APIリクエストエラー:', error)
      throw error
    }
  }
}
