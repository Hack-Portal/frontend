import React from 'react'
import { Grid } from '@/lib/mui/muiRendering'
import { RoomInformation } from './RoomInformation'
import { HackathonInformation } from './HackathonInformation'
import { Domain_GetRoomResponse } from '@/api/@types'

type Props = {
  tab: number
  room:Domain_GetRoomResponse
}

export const Information = (props:Props) => {
  const { tab } = props
  const { hackathon, ...roomInfo } = props.room
  return (
    <Grid container sx={{ height: '100vh' }} direction={'column'}>
      {tab === 0 ? (
        <RoomInformation roomInfo={roomInfo} />
      ) : (
        <HackathonInformation hackathon={hackathon} />
      )}
    </Grid>
  )
}
