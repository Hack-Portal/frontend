import { UserInterface } from '@/types/UserInterface'
import axios from 'axios'
import aspida from '@aspida/axios'
import api from '@/api/$api'
import { Domain_AccountResponses } from '@/api/@types'
import { API_URL } from '@/constants/API_URL'

export class UserRepository implements UserInterface {
  private static instance: UserRepository | null = null
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
      const client = api(
        aspida(axios, {
          baseURL: API_URL,
          headers: {
            'Content-Type': 'application/json',
            dbauthorization: token,
          },
        }),
      )

      const response = await client.accounts._account_id_string(id).get()
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
    try {
      const response = await fetch(API_URL + '/accounts', {
        method: 'POST',
        headers: {
          dbauthorization: token,
        },
        body: body,
      })
      const data = await response.json()

      return data.body as Domain_AccountResponses
    } catch (error) {
      console.error('APIリクエストエラー:', error)
      throw error
    }
  }
  /**
   * ユーザー情報を更新する
   * @param id ユーザーID
   * @param body 更新する情報
   * @param token 認証トークン
   * @returns 更新されたユーザー
   * @throws エラー
   */
  public async update(id: string, body: any, token: string) {
    try {
      const client = api(
        aspida(axios, {
          baseURL: process.env.NEXT_PUBLIC_TEST_URL,
          headers: {
            'Content-Type': 'application/json',
            dbauthorization: token,
          },
        }),
      )

      const response = await client.accounts
        ._account_id_string(id)
        .put({ body })
      return response.body
    } catch (error) {
      console.error('APIリクエストエラー:', error)
      throw error
    }
  }
}
