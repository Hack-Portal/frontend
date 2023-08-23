/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Get PastWork */
  get: {
    status: 200
    /** OK */
    resBody: Types.Domain_PastWorkResponse
  }

  /** Update PastWork */
  put: {
    status: 200
    /** OK */
    resBody: Types.Domain_PastWorkResponse
    /** Update PastWork Request */
    reqBody: Types.Domain_PastWorkRequestBody
  }

  /** Delete PastWork */
  delete: {
    status: 200
    /** OK */
    resBody: Types.Controller_SuccessResponse
  }
}
