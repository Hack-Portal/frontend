import axios from 'axios'
import aspida from '@aspida/axios'
import api from '@/api/$api'
import { FollowInterface } from '@/types/FollowInterface'
import { getAuthorizationHeader } from '../utils/headerManager'
import { FirebaseRepository } from './FirebaseRepository'
import { db } from '@/lib/firebase/client'

export class FollowRepository implements FollowInterface {
  private static instance: FollowRepository
  private authorization: string | null = null
  private firebaseRepository: FirebaseRepository

  public static getInstance(): FollowRepository {
    if (!FollowRepository.instance) {
      FollowRepository.instance = new FollowRepository()
      console.log(process.env.NEXT_PUBLIC_TEST_EMAIL_TOKEN)
    }
    return FollowRepository.instance
  }
  constructor() {
    this.firebaseRepository = FirebaseRepository.getInstance()
  }

  public async fetchFollow(id: string) {
    const user = await this.firebaseRepository.getCurrentUser()
    const token = await user?.getIdToken()
    try {
      const client: any = api(
        aspida(axios, {
          baseURL: process.env.NEXT_PUBLIC_TEST_URL,
          headers: {
            'Content-Type': 'application/json',

            dbAuthorization: process.env.NEXT_PUBLIC_TEST_EMAIL_TOKEN,
          },
        }),
      )

      this.authorization = getAuthorizationHeader()

      const response = await client.accounts._from_accountId(id).follow.get({
        query: { mode: true, pagr_id: 1, page_size: 10 },
        headers: {
          dbAuthorization: process.env.NEXT_PUBLIC_TEST_EMAIL_TOKEN,
        },
      })

      return response.body
    } catch (error) {
      // エラー処理
      console.error('APIリクエストエラー:', error)
      throw error
    }
  }

  public async fetchFollower(id: string) {
    const user = await this.firebaseRepository.getCurrentUser()
    const token = await user?.getIdToken()
    try {
      const client: any = api(
        aspida(axios, {
          baseURL: process.env.NEXT_PUBLIC_TEST_URL,
          headers: {
            'Content-Type': 'application/json',
            dbAuthorization: process.env.NEXT_PUBLIC_TEST_EMAIL_TOKEN,
          },
        }),
      )

      this.authorization = getAuthorizationHeader()

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