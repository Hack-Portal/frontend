/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** Get all StatusTag */
  get: {
    status: 200
    /** success response */
    resBody: Types.Response_StatusTag[]
  }

  /** Create a new StatusTag */
  post: {
    status: 200
    /** success response */
    resBody: Types.Response_StatusTag
    /** request body */
    reqBody: Types.Request_CreateStatusTag
  }
}
