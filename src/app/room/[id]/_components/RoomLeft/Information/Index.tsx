import React from 'react'
import { RoomInfo } from '../../../types/room'
import { Grid } from '@/lib/mui/muiRendering'
import { RoomInformation } from './RoomInformation'
import { HackathonInformation } from './HackathonInformation'

type Props = {
  roomInfo: Omit<RoomInfo, 'users'>
  tab: number
}
export const Information = (props: Props) => {
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
