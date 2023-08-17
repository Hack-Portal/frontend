import { RatingRepository } from '@/repositories/RatingRepository'

export class FetchRating {
  // このクラス内でHackathonRepositoryを使うために、HackathonRepositoryをインスタンス化しておく
  private ratingRepository: RatingRepository

  constructor() {
    this.ratingRepository = RatingRepository.getInstance()
  }

  public async fetchRating(account_id: string) {
    try {
      const rating = await this.ratingRepository.fetchAll(account_id)
      return rating
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
    }
  }
}
