/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** ハッカソンをリスト取得する */
  get: {
    query: {
      /** 取得するハッカソンID */
      hackathon_id: number
    }

    status: 200
    /** Successful operation */
    resBody: Types.Rt_hackathons
  }
}
