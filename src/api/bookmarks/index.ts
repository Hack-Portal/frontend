/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** Create a bookmark from the specified hackathon ID */
  post: {
    status: 200
    /** create success response */
    resBody: Types.Api_BookmarkResponse
    /** Create Bookmark Request Body */
    reqBody: Types.Api_CreateBookmarkRequestBody
  }
}
