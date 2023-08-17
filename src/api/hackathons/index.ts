/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** List Hackathon */
  get: {
    status: 200
    /** success response */
    resBody: Types.Domain_HackathonResponses[]
    reqFormat: URLSearchParams

    reqBody: {
      expired?: boolean | undefined
      page_id?: number | undefined
      page_size?: number | undefined
    }
  }

  /** Register a hackathon from given parameters */
  post: {
    status: 200
    /** success response */
    resBody: Types.Domain_HackathonResponses
    /** create hackathon Request Body */
    reqBody: Types.Domain_CreateHackathonRequestBody
  }
}
