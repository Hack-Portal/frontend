import { RatingRepository } from '@/repositories/RatingRepository'

export class FetchRating {
  // このクラス内でHackathonRepositoryを使うために、HackathonRepositoryをインスタンス化しておく
  private ratingRepository: RatingRepository

  constructor() {
    this.ratingRepository = RatingRepository.getInstance()
  }

  public async fetchRating() {
    try {
      const rating = await this.ratingRepository.fetchAll()

      // rateの高い順にソート
      const sortedRating = rating.sort((a: any, b: any) => b.rate - a.rate)

      // indexを付与
      const indexedRating = sortedRating.map((item: any, index: number) => {
        return {
          ...item,
          index: index + 1, // 1から始める順位
        }
      })

      return indexedRating
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
    }
  }
}
