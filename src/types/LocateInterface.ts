import { Db_Locates } from "@/api/@types";

export interface LocateRepository{
    fetchAll(): Promise<Db_Locates[]>
}