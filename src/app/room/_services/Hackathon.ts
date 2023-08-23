import { HackathonRepository } from "@/repositories/HackathonRepository";

export class HackathonService {
    // このクラス内でHackathonRepositoryを使うために、HackathonRepositoryをインスタンス化しておく
  private hackathonRepository: HackathonRepository;

  constructor() {
    this.hackathonRepository = HackathonRepository.getInstance();
  }

  public async fetchAll() {
    try {
      const hackathons = await this.hackathonRepository.fetchAll();
      return hackathons;
    } catch (error) {
      console.error('Serviceのエラー:', error);
      throw error;
    }
  }
}
