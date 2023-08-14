/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** list pastWorks */
  get: {
    status: 200
    /** OK */
    resBody: Types.Api_CreatePastWorkResponse[]
  }

  /** create pastWork */
  post: {
    status: 200
    /** OK */
    resBody: Types.Api_CreatePastWorkResponse
    /** past work */
    reqBody: Types.Api_CreatePastWorkRequestBody
  }
}
