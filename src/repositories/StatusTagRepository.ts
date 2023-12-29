import axios from 'axios'
import aspida from '@aspida/axios'
import api from '@/api/$api'
import { StatusTagInterface } from '@/types/StatusTagInterface'
import { API_URL } from '@/constants/API_URL'
import { getAuthorizationHeader } from '@/utils/headerManager'
import { Response_StatusTag } from '@/api/@types'

export class StatusTagRepository implements StatusTagInterface {
  private static instance: StatusTagRepository
  private authorization: string | null = null

  public static getInstance(): StatusTagRepository {
    if (!StatusTagRepository.instance) {
      StatusTagRepository.instance = new StatusTagRepository()
    }
    return StatusTagRepository.instance
  }

  public async fetchAll() {
    try {
      const client = api(
        aspida(axios, {
          baseURL: API_URL,
          headers: { authorization: this.authorization },
        }),
      )
      this.authorization = getAuthorizationHeader()

      const response = await client.status_tags.get()

      return response.body as Response_StatusTag[]
    } catch (error) {
      // エラー処理
      console.error('APIリクエストエラー:', error)
      throw error
    }
  }
}
