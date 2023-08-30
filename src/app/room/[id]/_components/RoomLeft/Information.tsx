import React from 'react'
import { Grid } from '@/lib/mui/muiRendering'
import { RoomInformation } from './Information/RoomInformation'
import { HackathonInformation } from './Information/HackathonInformation'
import { Domain_GetRoomResponse } from '@/api/@types'

type Props = {
  tab: number
  room: Domain_GetRoomResponse
}

export const Information = (props: Props) => {
  const { tab } = props
  const { hackathon, description,member_limit } = props.room
  return (
    <Grid
      container
      sx={{maxWidth: '100%' }}
      direction={'column'}
    >
      {tab === 0 ? (
        <RoomInformation description={description} member_limit={member_limit}/>
      ) : (
        <HackathonInformation hackathon={hackathon} />
      )}
    </Grid>
  )
}
