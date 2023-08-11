import { LocateRepository } from "@/repositories/LocateRepository";


export class FetchLocates{
    private locateRepository: LocateRepository;
    
    constructor(){
        this.locateRepository = LocateRepository.getInstance();
    }

    public async fetchAllLocates(){
        try{
            const locates = await this.locateRepository.fetchAll();
            return locates;
        }catch(error){
            console.error('Serviceのエラー:', error);
            throw error;
        }
    }
} 