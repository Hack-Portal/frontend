/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** List Hackathon */
  get: {
    query?: {
      expired?: boolean | undefined
      page_id?: number | undefined
      page_size?: number | undefined
    } | undefined

    status: 200
    /** success response */
    resBody: Types.Domain_HackathonResponses[]
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
