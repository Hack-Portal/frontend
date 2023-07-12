import { Box } from '@mui/joy'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import { MemberList } from './MemberList/Index'
import { RoomUser } from '../../types/user'

type Props = {
  users: RoomUser[]
}
export const RoomLeft = (props: Props) => {
  return (
    <Grid
      container
      direction={'column'}
      bgcolor={'#fff'}
      alignItems={'center'}
      sx={{ Height: '120vh', overflowX: 'scroll' }}
      wrap="nowrap"
    >
      <Grid item sx={{ mt: 3, textAlign: 'center' }} bgcolor={'#fff'}>
        <Typography
          sx={{ mt: 4, mb: 2, fontSize: 20 }}
          variant={'h6'}
          color={'#333'}
        >
          メンバー
        </Typography>
      </Grid>
      <Grid item sx={{ ml: 2 }} bgcolor={'#fff'}>
        <MemberList {...props} />
      </Grid>
    </Grid>
  )
}
