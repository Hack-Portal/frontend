import api from '@/api/$api'
import axios from 'axios'
import aspida from '@aspida/axios'
import { API_URL } from '@/constants/API_URL'

export class LocateRepository implements LocateRepository {
  private static instance: LocateRepository

  public static getInstance(): LocateRepository {
    if (!LocateRepository.instance) {
      LocateRepository.instance = new LocateRepository()
    }
    return LocateRepository.instance
  }

  public async fetchAll() {
    try {
      const client = api(
        aspida(axios, { baseURL: API_URL }),
      )

      const response = await client.locates.get()
      return response.body
    } catch (error) {
      console.error('APIリクエストエラー:', error)
      throw error
    }
  }
}
