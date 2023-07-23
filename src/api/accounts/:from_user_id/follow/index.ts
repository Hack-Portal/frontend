/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Follow!!!!!!!! */
  post: {
    status: 200
    /** succsss response */
    resBody: Types.Db_Follows[]
    /** create Follow Request Body */
    reqBody: Types.Api_CreateFollowRequestBody
  }

  /** Unfollow */
  delete: {
    status: 200
    /** succsss response */
    resBody: Types.Api_DeleteResponse
    reqFormat: URLSearchParams

    reqBody: {
      to_user_id: string
    }
  }
}
