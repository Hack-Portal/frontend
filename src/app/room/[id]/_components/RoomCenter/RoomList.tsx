'use client'
import React from 'react'
import { CenterArea } from '@/components/layouts/CenterArea'
import { CenterRoomCard } from '@/components/layouts/CenterRoomCard'
import { CardMedia } from '@/lib/mui/muiRendering'
import { RoomThumb } from '@/app/room/types/room'
import { RoomRecordRightBox } from '@/app/room/_components/RoomRecordRightBox'

type Props = {
  roomList: RoomThumb[]
}
export const RoomList = (props: Props) => {
  const { roomList } = props
  return (
    <>
      <CenterArea>
        {roomList?.map((room) => (
          <CenterRoomCard key={room.room_id} link={`/room/${room.room_id}`}>
            <CardMedia
              component="img"
              sx={{
                width: 218,
                height: 218,
                objectFit: 'cover',
              }}
              image={room.hackathon.icon}
              alt={room.hackathon.name}
            />
            <RoomRecordRightBox
              hackathonName={room.hackathon.name}
              title={room.title}
              member_limit={room.member_limit}
              now_member={room.now_member}
              techs={room.techs}
              frameworks={room.frameworks}
            />
          </CenterRoomCard>
        ))}
      </CenterArea>
    </>
  )
}
