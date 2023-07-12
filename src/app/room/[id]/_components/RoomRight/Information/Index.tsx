import React from 'react'
import { RoomInfo } from '../../../types/room'
import { Grid } from '@mui/material'
import { RoomInformation } from './RoomInformation'
import { HackathonInformation } from './HackathonInformation'

type Props = {
  roomInfo: Omit<RoomInfo, 'users'>
  tab: number
}
export const Information = (props: Props) => {
  const { tab } = props
  const { hackathon, ...roomInfo } = props.roomInfo
  return (
    <Grid container direction={'column'}>
      {tab === 0 ? (
        <RoomInformation roomInfo={roomInfo} />
      ) : (
        <HackathonInformation hackathonInfo={hackathon}/>
      )}
    </Grid>
  )
}