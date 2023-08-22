import axios from 'axios'
import aspida from '@aspida/axios'
import { getAuthorizationHeader } from '../utils/headerManager'
import { RoomInterface } from '@/types/RoomInterface'
import { FirebaseRepository } from './FirebaseRepository'
import { UserRepository } from './UserRepository'
import { CreateUser } from '@/app/signup/services/createUser'
import api from '@/api/$api'

export class RoomRepository implements RoomInterface {
  private static instance: RoomRepository
  private authorization: string | null = null
  private firebaseRepository: FirebaseRepository

  public static getInstance(): RoomRepository {
    if (!RoomRepository.instance) {
      RoomRepository.instance = new RoomRepository()
    }
    return RoomRepository.instance
  }
  constructor() {
    this.firebaseRepository = FirebaseRepository.getInstance()
  }

  public async fetchAll() {
    const user = await this.firebaseRepository.getCurrentUser()
    if (!user) throw new Error('ユーザーが存在しません')
    const token = await user?.getIdToken()
    try {
      console.log(process.env.NEXT_PUBLIC_TEST_URL)
      console.log(process.env.NEXT_PUBLIC_TEST_EMAIL_TOKEN)
      const client = api(
        // aspida(axios, { baseURL: 'https://api.seaffood.com/current/v1' }),

        aspida(axios, {
          // baseURL: process.env.NEXT_PUBLIC_API_URL,
          baseURL: process.env.NEXT_PUBLIC_TEST_URL,
          headers: {
            // authorization: this.authorization,
            'Content-Type': 'application/json',
            dbAuthorization: token,
          },
        }),
      )

      const response = await client.rooms.get()
      console.log(response)
      return response.body
    } catch (error) {
      // エラー処理
      console.error('APIリクエストエラー:', error)
      throw error
    }
  }
}

// シングルトンインスタンスとは、特定のクラスから生成されるオブジェクト（インスタンス）がプログラム全体で1つだけ存在することを保証するデザインパターン（設計原則）のことを指します。このパターンは「シングルトンパターン」と呼ばれます。
// 例えば、システム全体で共有する設定情報や、データベースへの接続などは、同一の情報や接続を使い回すことでリソースを節約できるため、シングルトンパターンが適しています。
// シングルトンパターンを使用するときは、そのクラスのコンストラクタをprivateにすることで、クラスの外部から新たにインスタンスを作成することを防ぎます。そして、特定のメソッド（例えばgetInstance()）を通じて、既存のシングルトンインスタンスを取得するか、または初めて呼び出されたときに新たにインスタンスを作成して返します。
// これにより、シングルトンパターンを採用したクラスから作成されるインスタンスが1つだけであることを保証することができます。この「1つだけ存在するインスタンス」が「シングルトンインスタンス」です。
