import { StatusTagRepository } from '@/repositories/StatusTagRepository'

export class FetchStatusTags {
  private statusTagRepository: StatusTagRepository

  constructor() {
    this.statusTagRepository = StatusTagRepository.getInstance()
  }

  public async fetchAllStatusTags() {
    try {
      const statusTags = await this.statusTagRepository.fetchAll()
      console.log('ServiceのstatusTags:', statusTags)
      return statusTags
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
    }
  }
}
