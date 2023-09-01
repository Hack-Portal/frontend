import { HackathonRepository } from "@/repositories/HackathonRepository";

export class HackathonService{
    private Hackathon: HackathonRepository;
    constructor(){
        this.Hackathon = new HackathonRepository();
    }
    public async fetchAll(){
        const hackathons = await this.Hackathon.fetchAll();
        return hackathons;
    }
}

