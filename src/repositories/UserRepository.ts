import { UserInterface } from '@/types/UserInterface'
import axios from 'axios'
import aspida from '@aspida/axios'
import api from '@/api/$api'
import { Domain_CreateAccountRequest } from '@/api/@types'

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
   * ユーザー一覧を取得する
   * @returns ユーザー一覧
   * @throws Error
   */
  public async fetchAll() {
    try {
      const client: any = api(
        aspida(axios, { baseURL: process.env.NEXT_PUBLIC_API_URL }),
      )

      const response = await client.users.get()
      return response.body
    } catch (error) {
      console.error('APIリクエストエラー:', error)
      throw error
    }
  }

  /**
   * ユーザーを取得する
   * @param id ユーザーID
   * @returns ユーザー
   * @throws Error
   */
  public async fetchById(id: string) {
    try {
      const client = api(
        aspida(axios, { baseURL: process.env.NEXT_PUBLIC_API_URL }),
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
   */
  public async create(body: Domain_CreateAccountRequest, token: string) {
    try {
      const client = api(
        aspida(axios, {
          baseURL: process.env.NEXT_PUBLIC_API_URL,
          // headers: { 'Content-Type': 'application/json',"DBAuthorization":token}
          headers: { 'Content-Type': 'application/json', authorization: token },
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
