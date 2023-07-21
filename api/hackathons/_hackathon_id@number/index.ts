/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** ハッカソンをリスト取得する */
  get: {
    status: 200
    /** Successful operation */
    resBody: Types.List_hackathons
  }
}
