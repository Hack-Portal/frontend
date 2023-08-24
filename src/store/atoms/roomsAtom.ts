import { Domain_ListRoomResponse } from "@/api/@types";
import { atom } from "recoil";

export const roomListState = atom<Domain_ListRoomResponse[]>({
    // keyは"todoList"
    key: "roomList",
    // 初期値として3件のタスクを持つ配列を宣言
    default: [],
});