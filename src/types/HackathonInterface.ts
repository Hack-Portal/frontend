import { Api_HackathonResponses } from "@/api/@types";

export interface HackathonInterface {
    fetchAll(): Promise<Api_HackathonResponses>
}