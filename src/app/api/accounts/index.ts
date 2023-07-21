/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** アカウントを登録する */
  post: {
    status: 200
    /** Successful operation */
    resBody: Types.Get_account
    /** 新しいアカウントを作成する */
    reqBody: Types.Create_account
  }
}
