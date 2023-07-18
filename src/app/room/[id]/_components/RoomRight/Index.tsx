import { Box } from '@mui/joy'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import { MemberList } from './MemberList/Index'
import { RoomUser } from '../../types/user'

type Props = {
  users: RoomUser[]
}
export const RoomRight = (props: Props) => {
  return (
    <Grid
      container
      direction={'column'}
      bgcolor={'#fff'}
      alignItems={'center'}
      sx={{
        minHeight: '90vh',
        maxHeight: '90vh',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
          width: '0.4em',
          background: 'transparent',
        },
      }}
      wrap="nowrap"
    >
      <Grid
        item
        bgcolor={'#fff'}
        sx={{
          borderBottom: '1px solid #ddd',
          pb: 3,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography sx={{ mt: 2, fontSize: 20 }} variant={'h6'} color={'#333'}>
          メンバー
        </Typography>
      </Grid>
      <Grid item bgcolor={'#fff'}>
        <MemberList />
      </Grid>
    </Grid>
  )
}
