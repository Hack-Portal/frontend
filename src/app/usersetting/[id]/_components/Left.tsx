import { Domain_AccountResponses } from '@/api/@types'
import { Typography, Avatar, Box, Button, Grid } from '@/lib/mui/muiRendering'
import { UserInfo } from 'firebase-admin/lib/auth/user-record'
import React from 'react'

type Props = {
  UserInfo: Domain_AccountResponses | undefined
}

export const Left = (props: Props) => {
  const { UserInfo } = props
  return (
    <Grid
      width={400}
      display={'row'}
      sx={{ width: '500px', textAlign: 'center', ml: 5, mr: 5, mt: 5 }}
    >
      <Grid display={'row'} flexDirection={'column'}>
        <Typography sx={{ mt: 2, mb: 3, fontSize: '30px' }}>Profile</Typography>
        <Avatar
          sx={{ margin: 'auto', width: 150, height: 150 }}
          alt="Remy Sharp"
          src={UserInfo?.icon}
        />
        <Typography sx={{ mt: 4, fontSize: '25px' }}>
          {UserInfo?.username}
        </Typography>
      </Grid>

      <Grid
        display={'flex'}
        justifyContent={'space-around'}
        textAlign={'center'}
        sx={{ mt: 5 }}
      >
        <Grid display={'row'} textAlign={'center'} sx={{ mt: 4 }}>
          <Typography sx={{ mt: 2 }} color={'#999'}>
            introduction
          </Typography>
          <Typography sx={{ mt: 2 }}>{UserInfo?.explanatory_text}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
