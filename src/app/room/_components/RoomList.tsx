'use client'
import React, { useEffect } from 'react'
import { CenterArea } from '@/components/layouts/CenterArea'
import { CenterRoomCard } from '@/components/layouts/CenterRoomCard'
import { CardMedia, Grid } from '@/lib/mui/muiRendering'
import { RoomThumb } from '@/app/room/_types/room'
import { RoomRecordRightBox } from '@/app/room/_components/RoomRecordRightBox'
import {
  Domain_HackathonResponses,
  Domain_ListRoomResponse,
} from '@/api/@types'
import { useRoom } from '../_hooks/useRoom'

// type Props = {
//   hackathons:Domain_HackathonResponses[]
// }
export const RoomList = () => {
  // const { hackathons } = props

  const { rooms } = useRoom()
  
  return (
    <Grid sx={{ p: 3, width: '70vw' }}>
      <CenterArea>
        {rooms?.map((room) => (
          <CenterRoomCard
            key={room.room_id}
            link={`/room/${room.room_id}`}
          >
            <CardMedia
              component="img"
              sx={{
                width: 218,
                height: 218,
                objectFit: 'cover',
              }}
              image={room.hackathon?.icon}
              alt={room.hackathon?.name}
            />
            <RoomRecordRightBox
              hackathonName={room.hackathon?.name!}
              title={room.title!}
              member_limit={room.member_limit!}
              now_member={room.now_member!}
              techs={room.members_tech_tags!}
              frameworks={room.members_frameworks!}
            />
          </CenterRoomCard>
        ))}
      </CenterArea>
    </Grid>
  )
}
