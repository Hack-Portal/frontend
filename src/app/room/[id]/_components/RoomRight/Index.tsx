
import { Grid, Typography } from '@/lib/mui/muiRendering'
import React from 'react'
import { MemberList } from './MemberList/Index'
import { Domain_NowRoomAccounts } from '@/api/@types'

type Props ={
  users:Domain_NowRoomAccounts[]
}

export const RoomRight = (props: Props) => {
  const { users } = props

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
        <MemberList users={users}/>
      </Grid>
    </Grid>
  )
}
