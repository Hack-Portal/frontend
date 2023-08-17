import { HackathonRepository } from '@/repositories/HackathonRepository'

export class FetchHackathonDetail {
  private HackathonRepository: HackathonRepository

  constructor() {
    this.HackathonRepository = HackathonRepository.getInstance()
  }

  public async fetchHackathonDetail(hackathonId: string) {
    try {
      const hackathonDetail = await this.HackathonRepository.fetchById(
        hackathonId,
      )
      return hackathonDetail
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
    }
  }
}
