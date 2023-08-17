'use client'
import React, { useEffect } from 'react'
import { CenterArea } from '@/components/layouts/CenterArea'
import { CenterRoomCard } from '@/components/layouts/CenterRoomCard'
import { CardMedia, Grid } from '@/lib/mui/muiRendering'
import { RoomThumb } from '@/app/room/types/room'
import { RoomRecordRightBox } from '@/app/room/_components/RoomRecordRightBox'
import { Domain_ListRoomResponse } from '@/api/@types'
import { FetchRooms } from '@/app/room/_services/fetchRooms'
import { useRooms } from '../../hooks/useRooms'

export const RoomList = () => {
  const { rooms } = useRooms()
  // useEffect(() => {
  //   fetch('https://api.seaffood.com/test/v1/rooms', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'dbauthorization': 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjYzODBlZjEyZjk1ZjkxNmNhZDdhNGNlMzg4ZDJjMmMzYzIzMDJmZGUiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoi5YmN55Sw5ZWT5Lq6IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBY0hUdGR5aE5RMDRKeTdVbjR3el9Vd0R3YmpHeEdPRTZCQ2ljZkxDSlgwcHJmVj1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9oYWNrLXBvcnRhbC0yIiwiYXVkIjoiaGFjay1wb3J0YWwtMiIsImF1dGhfdGltZSI6MTY5MjAyOTM1MSwidXNlcl9pZCI6IjVkVmpLV0UxMFdhZEJBcXVjT2IyWEptMW5XNDIiLCJzdWIiOiI1ZFZqS1dFMTBXYWRCQXF1Y09iMlhKbTFuVzQyIiwiaWF0IjoxNjkyMTg4NTQ1LCJleHAiOjE2OTIxOTIxNDUsImVtYWlsIjoicWlyZW5xaWFudGlhbjM2N0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExODM4MDI5NzYzMzg5MTQ0NTU5NCJdLCJlbWFpbCI6WyJxaXJlbnFpYW50aWFuMzY3QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.NsZ2nsYK3-mG2ScsrJDJLCxxYvrJDCJtmAw78quAXjeDB66BQoFmNJG3NsU5WU1yr5YZCuUzsM912EQcfmfzlhF2DqR-M5FHLjjvsSabgFn-aaHI3JUOwQtIWr98xnmu3_1RUrhne8whV3xfMBP2jTjXT8bL4Fj7mAkVJLEYsztUmkwdkFGmHEkFoplhLIs6czBSal8Kp8hlEmbbnOnpZdVjwbYT0BHtkxbUVo-dfvgwIuXcvKOVaOPDvoB8nvd0OMe2wK8utxAWUw-2fv9tJhJfSRoqajHLGk5e4Ci5pGFTLHC0oyIX2VUqBum-7N3rZYAD3_nTsTw340yIkNlKHw',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  // }, [])

  return (
    <Grid sx={{p:3,width:"70vw"}}>
      <CenterArea>
        {rooms?.map((room) => (
          <CenterRoomCard
            key={room.rooms?.room_id}
            link={`/room/${room.rooms?.room_id}`}
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
    </Grid>
  )
}
