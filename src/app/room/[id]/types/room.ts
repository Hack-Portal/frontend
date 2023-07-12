import { Room } from "@/types/room"
import { RoomUser } from "./user"

export type RoomInfo={
    users:RoomUser[]
}&Omit<Room,"now_member">