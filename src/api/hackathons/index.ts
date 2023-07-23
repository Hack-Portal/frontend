/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** List Hackathon */
  get: {
    status: 200
    /** succsss response */
    resBody: Types.Api_HackathonResponses[]
    reqFormat: URLSearchParams

    reqBody: {
      expired: boolean
      page_id: number
      page_size: number
    }
  }

  /** Register a hackathon from given parameters */
  post: {
    status: 200
    /** succsss response */
    resBody: Types.Api_HackathonResponses
    /** create hackathon Request Body */
    reqBody: Types.Api_CreateHackathonRequestBody
  }
}
