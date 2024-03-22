/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** List Hackathons */
  get: {
    query?:
      | {
          page_id?: number | undefined
          page_size?: number | undefined
        }
      | undefined

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
