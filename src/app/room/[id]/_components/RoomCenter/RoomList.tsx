'use client'
import React from 'react'
import { CenterArea } from '@/components/layouts/CenterArea'
import { CenterRoomCard } from '@/components/layouts/CenterRoomCard'
import { CardMedia } from '@/lib/mui/muiRendering'
import { RoomThumb } from '@/app/room/types/room'
import { RoomRecordRightBox } from '@/app/room/_components/RoomRecordRightBox'
import { Db_ListRoomTxResult } from '@/api/@types'
import { FetchRooms } from '@/app/room/_services/fetchRooms'
import { useRooms } from '../../hooks/useRooms'



export const RoomList = () => {
  const { rooms} =useRooms()

  return (
    <>
      <CenterArea>
        {rooms?.map((room) => (
          <CenterRoomCard key={room.rooms?.room_id} link={`/room/${room.rooms?.room_id}`}>
            <CardMedia
              component="img"
              sx={{
                width: 218,
                height: 218,
                objectFit: 'cover',
              }}
              image={room.hackathon?.icon}
              alt={room.hackathon?.hackathon_name}
            />
            <RoomRecordRightBox
              hackathonName={room.hackathon?.hackathon_name!}
              title={room.rooms?.title!}
              member_limit={room.rooms?.member_limit!}
              now_member={room.now_member!}
              techs={room.members_tech_tags!}
              frameworks={room.members_frameworks!}
            />
          </CenterRoomCard>
        ))}
      </CenterArea>
    </>
  )
}
