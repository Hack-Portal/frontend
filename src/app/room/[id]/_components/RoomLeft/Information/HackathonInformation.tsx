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
      sx={{ backgroundColor: '#fff', maxWidth: '320px' }}
      direction={'column'}
      gap={1}
    >
      <Grid item>
        <CustomAccordion title={'募集締め切り'}>
          {formatDate(hackathon.expired!)}
        </CustomAccordion>
      </Grid>
      <Grid item>
        <CustomAccordion title={'開催日'}>
          {formatDate(hackathon.start_date!)}
        </CustomAccordion>
      </Grid>
      <Grid item>
        <CustomAccordion title={'期間'}>{hackathon.term}日間</CustomAccordion>
      </Grid>
      <Grid item>
        <CustomAccordion title={'タグ'}>
          {hackathon.status_tag?.map((tag, index) => (
            <Typography key={index} component={'span'}>
               {tag.status}
              {index + 1 != hackathon.status_tag?.length && "、"}
            </Typography>
          ))}
        </CustomAccordion>
      </Grid>
    </Grid>
  )
}
