import { HackathonRepository } from "@/repositories/HackathonRepository";

export class FetchHackathons {
    // このクラス内でHackathonRepositoryを使うために、HackathonRepositoryをインスタンス化しておく
  private hackathonRepository: HackathonRepository;

  constructor() {
    this.hackathonRepository = HackathonRepository.getInstance();
  }

  public async fetchAllHackathons() {
    // trace
    console.log('FetchHackathons.fetchAllHackathons()-start');
    try {
      const hackathons = await this.hackathonRepository.fetchAll();
      console.log('FetchHackathons.fetchAllHackathons()-end');
      return hackathons;
    } catch (error) {
      console.error('Serviceのエラー:', error);
      throw error;
    }
  }
}
