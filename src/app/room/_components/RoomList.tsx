'use client'
import React from 'react'
import { CenterArea } from '@/components/layouts/CenterArea'
import { CenterRoomCard } from '@/components/layouts/CenterRoomCard'
import { CardMedia } from '@/lib/mui/muiRendering'
import { RoomRecordRightBox } from '@/app/room/_components/RoomList/RoomRecordRightBox'

import { useRoom } from '../_hooks/useRoom'

// type Props = {
//   hackathons:Domain_HackathonResponses[]
// }
export const RoomList = () => {
  // const { hackathons } = props

  const { rooms,previewRoom,handleSetPreview,handleJoinRoom } = useRoom()

  return (
    <CenterArea>
      {rooms?.map((room) => (
        <CenterRoomCard
          key={room.rooms?.room_id}
          link={`/room/${room.rooms?.room_id}`}
          handleSetPreview={()=>handleSetPreview(room)}
          handleJoinRoom={()=>handleJoinRoom(room)}
          previewRoom={previewRoom}
        >
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
            hackathonName={room.hackathon?.hackathon_name}
            title={room.rooms?.title}
            member_limit={room.rooms?.member_limit}
            now_member={room.now_member}
            techs={room.members_tech_tags}
            frameworks={room.members_frameworks}
            expired={room.hackathon?.expired}
          />
        </CenterRoomCard>
      ))}
    </CenterArea>
  )
}
