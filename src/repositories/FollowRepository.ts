import axios from 'axios'
import aspida from '@aspida/axios'
import api from '@/api/$api'
import { FollowInterface } from '@/types/FollowInterface'
import { getAuthorizationHeader } from '../utils/headerManager'
import { FirebaseRepository } from './FirebaseRepository'
import { API_URL } from '@/constants/API_URL'

export class FollowRepository implements FollowInterface {
  private static instance: FollowRepository

  public static getInstance(): FollowRepository {
    if (!FollowRepository.instance) {
      FollowRepository.instance = new FollowRepository()
    }
    return FollowRepository.instance
  }

  public async fetchFollow(id: string, token: string) {
    try {
      const client = api(
        aspida(axios, {
          baseURL:API_URL,
          headers: {
            'Content-Type': 'application/json',
            dbAuthorization: token,
          },
        }),
      )

      const response = await client.accounts._from_account_id(id).follow.get({
        //
        query: { page_id: '1', page_size: '10', mode: true },
      })

      return response.body
    } catch (error) {
      // エラー処理
      console.error('APIリクエストエラー:', error)
      throw error
    }
  }

  public async fetchFollower(id: string, token: string) {
    try {
      const client = api(
        aspida(axios, {
          baseURL: API_URL,
          headers: {
            'Content-Type': 'application/json',
            dbAuthorization: token,
          },
        }),
      )

      const response = await client.accounts._from_account_id(id).follow.get({
        query: { page_id: '1', page_size: '10', mode: false },
      })

      return response.body
    } catch (error) {
      // エラー処理
      console.error('APIリクエストエラー:', error)
      throw error
    }
  }
}
