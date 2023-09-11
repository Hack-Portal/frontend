import { HackathonRepository } from "@/repositories/HackathonRepository";

export class HackathonService {
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
