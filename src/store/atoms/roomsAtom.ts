import { Domain_GetRoomResponse } from "@/api/@types";
import { atom } from "recoil";

export const roomListState = atom<Domain_GetRoomResponse[]>({
    // keyは"todoList"
    key: "roomList",
    // 初期値として3件のタスクを持つ配列を宣言
    default: [],
});