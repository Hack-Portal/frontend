import axios from 'axios'
import aspida from '@aspida/axios'
import api from '@/api/$api'
import { FollowInterface } from '@/types/FollowInterface'
import { getAuthorizationHeader } from '../utils/headerManager'
import { FirebaseRepository } from './FirebaseRepository'

export class FollowRepository implements FollowInterface {
  private static instance: FollowRepository

  public static getInstance(): FollowRepository {
    if (!FollowRepository.instance) {
      FollowRepository.instance = new FollowRepository()
    }
    return FollowRepository.instance
  }

  public async fetchFollow(followid: string, token: string) {
    try {
      const client: any = api(
        aspida(axios, {
          baseURL: process.env.NEXT_PUBLIC_TEST_URL,
          headers: {
            'Content-Type': 'application/json',
            dbAuthorization: token,
          },
        }),
      )

      const response = await client.accounts
        .from_account_id(followid)
        .follow.get({
          //
          query: { mode: true, page_id: 1, page_size: 10 },
        })

      return response.body
    } catch (error) {
      // エラー処理
      console.error('APIリクエストエラー:', error)
      throw error
    }
  }

  public async fetchFollower(followid: string, token: string) {
    try {
      const client: any = api(
        aspida(axios, {
          baseURL: process.env.NEXT_PUBLIC_TEST_URL,
          headers: {
            'Content-Type': 'application/json',
            dbAuthorization: token,
          },
        }),
      )

      const response = await client.accounts
        .from_account_id(followid)
        .follow.get({
          query: { mode: false, page_id: 1, page_size: 10 },
        })

      return response.body
    } catch (error) {
      // エラー処理
      console.error('APIリクエストエラー:', error)
      throw error
    }
  }
}
