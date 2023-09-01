'use client'
import { Domain_GetRoomResponse } from '@/api/@types'
import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { RoomRepository } from '@/repositories/RoomRepository'
import { atomFamily, selectorFamily } from 'recoil'

export const roomStateFamily = selectorFamily<Domain_GetRoomResponse, string>({
  key: 'roomState',
  get: (roomId: string) => async () => {
    try {
      const Room = new RoomRepository();
      const firebase = new FirebaseRepository();
      if (await firebase.getCurrentUser()) {
        const token = await firebase.getToken();
        const room = await Room.fetchById(roomId, token);
        return room;
      } else {
        throw new Error('ユーザーが存在しない');
      }
    } catch (error) {
      console.error("An error occurred while fetching the room:", error);
      throw error;
    }
  },
})
