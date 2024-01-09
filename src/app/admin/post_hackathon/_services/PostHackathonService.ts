import { HackathonRepository } from '@/repositories/HackathonRepository'
import { formatDate } from '@/utils/formatDate'
export class PostHackathonService {
  private hackathonRepository: HackathonRepository

  constructor() {
    this.hackathonRepository = HackathonRepository.getInstance()
  }

  public async postHackathon(data: any) {
    try {
      const postHackathon = await this.hackathonRepository.post(data)
      console.log('postHackathon:', postHackathon)
      return postHackathon
    } catch (error) {
      throw error
    }
  }
}
