/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Get StatusTag by id */
  get: {
    status: 200
    /** success response */
    resBody: Types.Response_StatusTag
    /** request body */
    reqBody: Types.Request_GetStatusTagByID
  }

  /** Update StatusTag by id */
  put: {
    status: 200
    /** success response */
    resBody: Types.Response_StatusTag
    /** request body */
    reqBody: Types.Request_UpdateStatusTag
  }
}
