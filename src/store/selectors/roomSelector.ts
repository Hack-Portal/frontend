"use client";
import { Domain_GetRoomResponse } from '@/api/@types';
import { FirebaseRepository } from '@/repositories/FirebaseRepository';
import { RoomRepository } from '@/repositories/RoomRepository';
import { selectorFamily } from 'recoil';

export const roomStateFamily = selectorFamily<Domain_GetRoomResponse, string>({
  key: 'roomState',
  get: (params: string) => async () => {
    try {
      const Room = new RoomRepository();
      const Firebase = new FirebaseRepository();
      const token = await Firebase.getToken();
      const room = await Room.fetchById(params, token);
      return room;
    } catch (error) {
      console.error("An error occurred while fetching the room:", error);
      throw error;
    }
  },
});
