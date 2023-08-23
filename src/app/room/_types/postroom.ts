import { Domain_CreateRoomRequestBody } from "@/api/@types";


export type PostRoom = Omit<Domain_CreateRoomRequestBody, 'account_id'>;