
import { Grid, Typography } from '@/lib/mui/muiRendering'
import React from 'react'
import { MemberList } from './RoomRight/MemberList'

export const RoomRight = () => {
  

  return (
    <Grid
      container
      direction={'column'}
      bgcolor={'#fff'}
      alignItems={'center'}
      sx={{
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
          width: '0.4em',
          background: 'transparent',
        },
        borderLeft: '2px solid #eee',
        minHeight: '100%',
      }}
      wrap="nowrap"
      width={'auto'}
    >
      <MemberList />
    </Grid>
  )
}
