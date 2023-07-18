import { Room } from "@/types/room"
import { RoomUser } from "./user"

export type RoomInfo=&Omit<Room,"now_member">