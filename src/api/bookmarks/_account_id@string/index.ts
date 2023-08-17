/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Get my bookmarks */
  get: {
    status: 200
    /** success response */
    resBody: Types.Domain_BookmarkResponse[]
    reqFormat: URLSearchParams

    reqBody: {
      page_id?: number | undefined
      page_size?: number | undefined
    }
  }

  /** Delete the bookmark of the specified hackathon ID */
  delete: {
    status: 200
    /** delete success response */
    resBody: Types.Domain_BookmarkResponse
  }
}
