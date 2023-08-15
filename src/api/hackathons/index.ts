/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** List Hackathon */
  get: {
    status: 200
    /** success response */
    resBody: Types.Api_HackathonResponses[]
  }

  /** Register a hackathon from given parameters */
  post: {
    status: 200
    /** success response */
    resBody: Types.Api_HackathonResponses
    reqFormat: FormData
    /** create hackathon Request Body */
    reqBody: Types.Api_CreateHackathonRequestBody
  }
}
