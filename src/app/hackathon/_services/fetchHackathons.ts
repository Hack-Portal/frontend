import { HackathonRepository } from '@/repositories/HackathonRepository'
import { formatDate } from '@/utils/formatDate'

export class FetchHackathons {
  // このクラス内でHackathonRepositoryを使うために、HackathonRepositoryをインスタンス化しておく
  private hackathonRepository: HackathonRepository

  constructor() {
    this.hackathonRepository = HackathonRepository.getInstance()
  }

  public async fetchAllHackathons() {
    // trace
    try {
      const hackathons = await this.hackathonRepository.fetchAll()
      return hackathons
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
      throw error
    }
  }
}
