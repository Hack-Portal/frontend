/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Get Hackathon */
  get: {
    status: 200
    /** success response */
    resBody: Types.Response_GetHackathon
  }

  /** Delete Hackathons */
  delete: {
    status: 200
    /** success response */
    resBody: Types.Response_DeleteHackathon
  }
}
