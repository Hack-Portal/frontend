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
    <Grid container direction={'column'} bgcolor={'#fff'}>
      <Grid item bgcolor={'#fff'}>
        <Typography
          sx={{ mt: 4, fontSize: 20, textAlign: 'center' }}
          variant={'h6'}
          color={'#333'}
        >
          メンバー
        </Typography>
        <Box sx={{ height: '15px' }} />
      </Grid>
      <Grid item sx={{ ml: 2 }} bgcolor={'#fff'}>
        <MemberList {...props} />
      </Grid>
    </Grid>
  )
}
