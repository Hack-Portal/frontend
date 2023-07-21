/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** ハッカソンを追加する */
  post: {
    status: 200
    /** Successful operation */
    resBody: Types.List_hackathons
    /** 新しいハッカソンを作成する */
    reqBody: Types.Create_hackathons
  }

  /** ハッカソンをリスト取得する */
  get: {
    query: {
      /** 取得するハッカソンの数 */
      page_size: number
      /** 取得するページ数 */
      page_id: number
    }

    status: 200
    /** Successful operation */
    resBody: Types.List_hackathons[]
  }
}
