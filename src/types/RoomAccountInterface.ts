import { Controller_SuccessResponse } from "@/api/@types";

export type RoomAccountInterface = {
    join: (roomId: string,accountId:string,token: string, ) => Promise<Controller_SuccessResponse>;
    // leave: () => Promise<void>;
}