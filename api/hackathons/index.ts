/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** List Hackathons */
  get: {
    query?: {
      /** 期間が長いかどうか？ */
      longTerm?: boolean | undefined
      /** 締め切りが近いかどうか？ */
      nearDeadline?: boolean | undefined
      /** 新着かどうか？ */
      new?: boolean | undefined
      pageID?: number | undefined
      pageSize?: number | undefined
      /** タグ */
      tags?: number[] | undefined
    } | undefined

    status: 200
    /** success response */
    resBody: Types.Response_GetHackathon[]
  }

  /** Create Hackathon */
  post: {
    status: 200
    /** success response */
    resBody: Types.Response_CreateHackathon
    /** request body */
    reqBody: Types.Request_CreateHackathon
  }
}
