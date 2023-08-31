import { Domain_GetRoomResponse, Domain_NowRoomAccounts } from "@/api/@types";
import { atom } from "recoil";

export const roomState = atom<Domain_GetRoomResponse>({
    // keyは"todoList"
    key: "room",
    // 初期値として3件のタスクを持つ配列を宣言
    default: {}
});