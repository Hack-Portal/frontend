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

  public async fetchFollow(id: string, token: string) {
    try {
      const client: any = api(
        aspida(axios, {
          baseURL: process.env.NEXT_PUBLIC_TEST_URL,
          headers: {
            'Content-Type': 'application/json',
          },
        }),
      )

      const response = await client.accounts._from_accountId(id).follow.get({
        query: { mode: true, pagr_id: 1, page_size: 10 },
        headers: {
          dbAuthorization: token,
        },
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
      const client: any = api(
        aspida(axios, {
          baseURL: process.env.NEXT_PUBLIC_TEST_URL,
          headers: {
            'Content-Type': 'application/json',
            dbAuthorization: token,
          },
        }),
      )

      const response = await client.accounts._from_account_id(id).follow.get({
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
//sample
// public async fetchAll() {
//   const user = await this.firebaseRepository.getCurrentUser()
//   if (!user) throw new Error('ユーザーが存在しません')
//   const token = await user?.getIdToken()
//   try {
//     console.log(process.env.NEXT_PUBLIC_TEST_URL)
//     console.log(process.env.NEXT_PUBLIC_TEST_EMAIL_TOKEN)
//     const client = api(
//       // aspida(axios, { baseURL: 'https://api.seaffood.com/current/v1' }),

//       aspida(axios, {
//         // baseURL: process.env.NEXT_PUBLIC_API_URL,
//         baseURL: process.env.NEXT_PUBLIC_TEST_URL,
//         headers: {
//           'Content-Type': 'application/json',
//           dbAuthorization: token,
//         },
//       }),
//     )
//     const response = await client.rooms.get()
//     console.log(response)
//     return response.body
//   } catch (error) {
//     // エラー処理
//     console.error('APIリクエストエラー:', error)
//     throw error
//   }
// }
