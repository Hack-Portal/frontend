
import { Grid, Typography } from '@/lib/mui/muiRendering'
import React from 'react'
import { CustomAccordion } from './CustomAccordion'

// type Props = {
//   hackathonInfo: Hackathon
// }
export const HackathonInformation = () => {
  // const { hackathonInfo } = props
  return (
    <Grid
      container
      sx={{ backgroundColor: '#fff' }}
      direction={'column'}
      gap={1}
    >
      {/* <Grid item>
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
          {hackathonInfo.HackathonStatusTag.map((tag, index) => (
            <Typography key={index}>{tag.status}</Typography>
          ))}
        </CustomAccordion>
      </Grid> */}
    </Grid>
  )
}
