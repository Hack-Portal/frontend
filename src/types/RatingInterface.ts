import { Api_RateResponses } from '@/api/@types'

export interface RatingInterface {
  fetchAll(): Promise<Api_RateResponses>
}
