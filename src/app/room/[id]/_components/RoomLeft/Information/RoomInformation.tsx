import React from 'react'
import { Grid, Typography } from '@/lib/mui/muiRendering'
import { CustomAccordion } from './CustomAccordion'

export const RoomInformation = (props: any) => {
  const { roomInfo } = props
  return (
    <Grid container direction={'column'} gap={1}>
      <Grid item>
        <CustomAccordion title={'説明'}>{roomInfo.description}</CustomAccordion>
      </Grid>
      <Grid item>
        <CustomAccordion title={'募集上限'}>
          {roomInfo.member_limit}人
        </CustomAccordion>
      </Grid>
      <Grid item>
        <CustomAccordion title={'使用言語'}>
          {/* {roomInfo.RoomsTechTags.map((tag, index) => (
            <Grid sx={{ mt: 1.5 }} key={index}>
              {tag.tech_tag.language}
            </Grid>
          ))} */}
        </CustomAccordion>
      </Grid>
      <Grid item>
        <CustomAccordion title={'使用フレームワーク'}>
          {/* {roomInfo.RoomsFrameworks.map((tag) => (
            <Typography sx={{ mt: 1.5 }} key={tag.framework.framework_id}>
              {tag.framework.framework}
            </Typography>
          ))} */}
          <></>
        </CustomAccordion>
      </Grid>
    </Grid>
  )
}
