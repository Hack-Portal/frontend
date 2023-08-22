import { Domain_AccountRateResponse } from '@/api/@types'

export interface RatingInterface {
  fetchAll(): Promise<Domain_AccountRateResponse[]>
}
