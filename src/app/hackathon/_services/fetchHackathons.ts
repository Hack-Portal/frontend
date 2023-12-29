import { HackathonRepository } from '@/repositories/HackathonRepository'
import { formatDate } from '@/utils/formatDate'

export class FetchHackathons {
  // このクラス内でHackathonRepositoryを使うために、HackathonRepositoryをインスタンス化しておく
  private hackathonRepository: HackathonRepository

  constructor() {
    this.hackathonRepository = HackathonRepository.getInstance()
  }

  public async fetchAllHackathons() {
    try {
      const fetchHackathons = await this.hackathonRepository.fetchAll()
      const hackathons = fetchHackathons.map((hackathon) => {
        return {
          ...hackathon,
          expired: {
            date: hackathon.expired ? formatDate(hackathon.expired) : '',
            title:"募集締め切り"
          },
          start_date: {
            date: hackathon.start_date ? formatDate(hackathon.start_date) : '',
            title:"開催日"
        },
          term: {
            date: hackathon.term ? `${String(hackathon.term)}日間` : '',
            title:"期間"
        },
      }})
      return hackathons
    } catch (error) {
      throw error
    }
  }
}
