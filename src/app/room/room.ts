import { Hackathon } from "@/types/hackathon";
import { Room } from "@/types/room";

export type RoomListThumb ={
    hackathon: Pick<Hackathon,'hackathon_id'|'roomicon'>
}&Pick<Room,'id'|'title' >