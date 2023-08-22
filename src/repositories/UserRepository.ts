import { UserInterface } from '@/types/UserInterface'
import axios from 'axios'
import aspida from '@aspida/axios'
import api from '@/api/$api'

export class UserRepository implements UserInterface {
  private static instance: UserRepository | null = null

  constructor() {}

  public static getInstance(): UserRepository {
    if (!this.instance) {
      this.instance = new UserRepository()
    }
    return this.instance
  }


  /**
   * ユーザーを取得する
   * @param id ユーザーID
   * @returns ユーザー
   * @throws Error
   */
  public async fetchById(id: string, token: string) {
    try {
      console.log(token)
      const client = api(
        aspida(axios, {
          baseURL: process.env.NEXT_PUBLIC_TEST_URL,
          headers: {
            'Content-Type': 'application/json',
            dbauthorization: token,
          },
        }),
      )

      const response = await client.accounts._account_id(id).get()
      return response.body
    } catch (error) {
      console.error('APIリクエストエラー:', error)
      throw error
    }
  }

  /**
   * ユーザーを作成する
   * @returns ユーザー
   * @throws Error
   * @param body formData
   */
  public async create(body: any, token: string) {
  // public async create(body: any, token: string) {
    console.log(body);
    
    try {
      const client = api(
        aspida(axios, {
          baseURL: process.env.NEXT_PUBLIC_TEST_URL,
          headers: { dbauthorization: token },
        }),
      )

      const response = await client.accounts.post({ body: body })
      return response.body
    } catch (error) {
      console.error('APIリクエストエラー:', error)
      throw error
    }
  }
}
