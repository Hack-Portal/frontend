import { Grid, Typography } from '@/lib/mui/muiRendering'
import React from 'react'
import { CustomAccordion } from './CustomAccordion'
import { Domain_RoomHackathonInfo } from '@/api/@types'
import { formatDate } from '@/utils/formatDate'

type Props = {
  hackathon?: Domain_RoomHackathonInfo
}
export const HackathonInformation = (props: Props) => {
  const { hackathon } = props
  if (!hackathon) return <></>
  return (
    <Grid
      container
      sx={{ backgroundColor: '#fff' }}
      direction={'column'}
      gap={1}
    >
      <Grid item>
        <CustomAccordion title={'タイトル'}>
          {hackathon.name}
        </CustomAccordion>
      </Grid>
      <Grid item>
        <CustomAccordion title={'リンク'}>
          {hackathon.link}
        </CustomAccordion>
      </Grid>
      <Grid item>
        <CustomAccordion title={'募集締め切り'}>
          <Typography>{formatDate(hackathon.expired!)}</Typography>
        </CustomAccordion>
      </Grid>
      <Grid item>
        <CustomAccordion title={'開催日'}>
          <Typography>{formatDate(hackathon.start_date!)}</Typography>
        </CustomAccordion>
      </Grid>
      <Grid item>
        <CustomAccordion title={'期間'}>
          <Typography>{hackathon.term}日間</Typography>
        </CustomAccordion>
      </Grid>
      <Grid item>
        <CustomAccordion title={'タグ'}>
          {hackathon.status_tag?.map((tag, index) => (
            <Typography key={index}>{tag.status}</Typography>
          ))}
        </CustomAccordion>
      </Grid>
    </Grid>
  )
}
