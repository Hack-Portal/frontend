import { Domain_NowRoomAccounts } from "@/api/@types";
import { atom } from "recoil";

export const roomMembersState = atom<Domain_NowRoomAccounts[]>({
    // keyは"todoList"
    key: "roomLMembers",
    // 初期値として3件のタスクを持つ配列を宣言
    default: [],
});