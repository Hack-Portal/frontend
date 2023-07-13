import React from 'react'
import { RoomInfo } from '../../../types/room'
import { Grid, Typography } from '@mui/material'
import { CustomAccordion } from './CustomAccordion'

type Props = {
  roomInfo: Omit<RoomInfo, 'users' | 'hackathon'>
}
export const RoomInformation = (props: Props) => {
  const { roomInfo } = props
  return (
    <Grid container direction={'column'} gap={1}>
      <Grid item>
        <CustomAccordion title={'説明'}>
          {roomInfo.description}
        </CustomAccordion>
      </Grid>
      <Grid item>
        <CustomAccordion title={'募集上限'}>
          {roomInfo.member_limit}人
        </CustomAccordion>
      </Grid>
      <Grid item>
        <CustomAccordion title={'使用言語'}>
          {roomInfo.tech_tags.map((tag) => (
            <Typography key={tag.id}>{tag.name}</Typography>
          ))}
        </CustomAccordion>
      </Grid>
      <Grid item>
        <CustomAccordion title={'使用フレームワーク'}>
          {roomInfo.frameworks.map((tag) => (
            <Typography key={tag.id}>{tag.name}</Typography>
          ))}
        </CustomAccordion>
      </Grid>
    </Grid>
  )
}
