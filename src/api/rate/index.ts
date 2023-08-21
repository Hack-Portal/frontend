/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** List Account Rate */
  get: {
    query?: {
      page_id?: number | undefined
      page_size?: number | undefined
    } | undefined

    status: 200
    /** success response */
    resBody: Types.Domain_AccountRateResponse[]
  }
}
