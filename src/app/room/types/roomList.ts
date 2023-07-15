import { Hackathon } from "@/types/hackathon";
import { Room } from "@/types/room";

export type RoomListThumb ={
    hackathon: Pick<Hackathon,'id'|'icon'>
}&Pick<Room,'id'|'title' >