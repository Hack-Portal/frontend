/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** List PastWork */
  get: {
    query?: {
      page_id?: number | undefined
      page_size?: number | undefined
    } | undefined

    status: 200
    /** OK */
    resBody: Types.Domain_ListPastWorkResponse[]
  }

  /** Create a past work from the requested body */
  post: {
    status: 200
    /** create success response */
    resBody: Types.Domain_PastWorkResponse
    /** Create PastWork Request */
    reqBody: Types.Domain_PastWorkRequestBody
  }
}
