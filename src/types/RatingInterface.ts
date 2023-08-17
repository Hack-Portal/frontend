import { Domain_AccountRateResponse } from '../../api/@types'

export interface RatingInterface {
  fetchAll(account_id: string): Promise<Domain_AccountRateResponse[]>
}
