import { RoomAccountInterface } from "@/types/RoomAccountInterface";

export class RoomAccountMockRepository implements RoomAccountInterface{
    public async join(roomId: string, accountId: string, token: string) {
        return {result: "success"}
    }
}