import React from 'react'
import { Grid, Typography } from '@/lib/mui/muiRendering'
import { CustomAccordion } from './CustomAccordion'
import { Domain_NowRoomAccounts } from '@/api/@types'

type Props = {
  description?: string
  member_limit?: number
}
export const RoomInformation = (props: Props) => {
  const { description,member_limit} = props
  return (
    <Grid container direction={'column'} gap={1}>
      <Grid item>
        <CustomAccordion title={'説明'}>{description}</CustomAccordion>
      </Grid>
      <Grid item>
        <CustomAccordion title={'募集上限'}>
          {member_limit}人
        </CustomAccordion>
      </Grid>
    </Grid>
  )
}
