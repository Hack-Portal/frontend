import axios from 'axios'
import aspida from '@aspida/axios'
import api from '@/api/$api'
import { HackathonInterface } from '@/types/HackathonInterface'
import { getAuthorizationHeader } from '../utils/headerManager'
import {
  Request_CreateHackathon,
  Response_CreateHackathon,
  Response_GetHackathon,
} from '@/api/@types'
import { API_URL } from '@/constants/API_URL'

export class HackathonRepository implements HackathonInterface {
  private static instance: HackathonRepository
  private authorization: string | null = null

  public static getInstance(): HackathonRepository {
    if (!HackathonRepository.instance) {
      HackathonRepository.instance = new HackathonRepository()
    }
    return HackathonRepository.instance
  }

  /**
   *  ハッカソン一覧を取得する
   * @returns  ハッカソン一覧
   */
  public async fetchAll() {
    try {
      const client = api(
        // aspida(axios, { baseURL: 'https://api.seaffood.com/current/v1' }),
        aspida(axios, {
          baseURL: API_URL,
          headers: { authorization: this.authorization },
        }),
      )

      this.authorization = getAuthorizationHeader()

      const response = await client.hackathons.get({
        query: { page_size: 10, page_id: 1 },
      })
      return response.body as Response_GetHackathon[]
    } catch (error) {
      // エラー処理
      console.error('APIリクエストエラー:', error)
      throw error
    }
  }
  public async post(data: Request_CreateHackathon) {
    try {
      const client = api(
        // aspida(axios, { baseURL: 'https://api.seaffood.com/current/v1' }),
        aspida(axios, {
          baseURL: API_URL,
          headers: { authorization: this.authorization },
        }),
      )

      this.authorization = getAuthorizationHeader()

      const response = await client.hackathons.post({ body: data })
      return response.body as Response_CreateHackathon
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
