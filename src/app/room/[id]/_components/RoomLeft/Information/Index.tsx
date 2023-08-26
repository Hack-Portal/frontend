import React from 'react'
import { Grid } from '@/lib/mui/muiRendering'
import { RoomInformation } from './RoomInformation'
import { HackathonInformation } from './HackathonInformation'

export const Information = (props: any) => {
  const { tab } = props
  const { Hackathon, ...roomInfo } = props.roomInfo
  return (
    <Grid container sx={{ height: '100vh' }} direction={'column'}>
      {tab === 0 ? (
        <RoomInformation roomInfo={roomInfo} />
      ) : (
        // <HackathonInformation hackathonInfo={Hackathon} />
        <></>
      )}
    </Grid>
  )
}
