import { Hackathon } from '@/types/hackathon'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import { CustomAccordion } from './CustomAccordion'

type Props = {
  hackathonInfo: Hackathon
}
export const HackathonInformation = (props: Props) => {
  const { hackathonInfo } = props
  return (
    <Grid
      container
      sx={{ backgroundColor: '#fff' }}
      direction={'column'}
      gap={1}
    >
      <Grid item>
        <CustomAccordion title={'タイトル'}>
          {hackathonInfo.name}
        </CustomAccordion>
      </Grid>
      <Grid item>
        <CustomAccordion title={'説明'}>
          {hackathonInfo.description}
        </CustomAccordion>
      </Grid>
      <Grid item>
        <CustomAccordion title={'募集締め切り'}>
          <Typography>{hackathonInfo.expired}</Typography>
        </CustomAccordion>
      </Grid>
      <Grid item>
        <CustomAccordion title={'開催日'}>
          <Typography>{hackathonInfo.start_date}</Typography>
        </CustomAccordion>
      </Grid>
      <Grid item>
        <CustomAccordion title={'期間'}>
          <Typography>{hackathonInfo.term}日間</Typography>
        </CustomAccordion>
      </Grid>
      <Grid item>
        <CustomAccordion title={'タグ'}>
          {hackathonInfo.hackthon_tag.map((tag, index) => (
            <Typography key={index}>{tag}</Typography>
          ))}
        </CustomAccordion>
      </Grid>
    </Grid>
  )
}
