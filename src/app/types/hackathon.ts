
import { Api_HackathonResponses } from "@/api/@types";
import { Hackathon } from "@/types/hackathon";

export type HackathonThumb = Omit<Api_HackathonResponses, 'description'|'link'> 

