/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Get my bookmarks */
  get: {
    status: 200
    /** delete success response */
    resBody: Types.Api_BookmarkResponse[]
    reqFormat: URLSearchParams

    reqBody: {
      /** Delete Bookmark Request Body */
      ListBookmarkRequestQueries: string
    }
  }

  /** Delete the bookmark of the specified hackathon ID */
  delete: {
    status: 200
    /** delete success response */
    resBody: Types.Api_BookmarkResponse
  }
}
