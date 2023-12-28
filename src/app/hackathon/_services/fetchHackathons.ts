import { HackathonRepository } from '@/repositories/HackathonRepository'

export class FetchHackathons {
  // このクラス内でHackathonRepositoryを使うために、HackathonRepositoryをインスタンス化しておく
  private hackathonRepository: HackathonRepository

  constructor() {
    this.hackathonRepository = HackathonRepository.getInstance()
  }

  public async fetchAllHackathons() {
    try {
      const hackathons = await this.hackathonRepository.fetchAll()
      console.log('Serviceのhackathons:', hackathons)
      return hackathons
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
    }
  }
}
