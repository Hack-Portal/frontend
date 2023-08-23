import { RatingRepository } from '@/repositories/RatingRepository'

export class FetchRating {
  // このクラス内でRatingRepositoryを使うために、RatingRepositoryをインスタンス化しておく
  private ratingRepository: RatingRepository

  constructor() {
    this.ratingRepository = RatingRepository.getInstance()
  }

  public async fetchRating() {
    try {
      const rating = await this.ratingRepository.fetchAll()
      return rating
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
    }
  }
}
