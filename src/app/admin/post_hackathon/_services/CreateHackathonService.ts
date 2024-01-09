// z// // import { StatusTagRepository } from '@/repositories/StatusTagRepository'

// // export class FetchStatusTags {
// //   private statusTagRepository: StatusTagRepository

// //   constructor() {
// //     this.statusTagRepository = StatusTagRepository.getInstance()
// //   }

// //   public async fetchAllStatusTags() {
// //     try {
// //       const statusTags = await this.statusTagRepository.fetchAll()
// //       console.log('ServiceのstatusTags:', statusTags)
// //       return statusTags
// //     } catch (error) {
// //       console.error('Serviceのエラー:', error)
// //       throw error
// //     }
// //   }
// // }

import { HackathonRepository } from '@/repositories/HackathonRepository'
import { formatDate } from '@/utils/formatDate'
export class PostHackathon {
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
