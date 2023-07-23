import { Avatar, Box, Button, Grid } from '@mui/joy'
import { Typography } from '@mui/material'
import React from 'react'

export const Left = () => {
  return (
    <Grid
      width={400}
      display={'row'}
      sx={{ width: '400px', textAlign: 'center', ml: 5, mr: 5, mt: 5 }}
    >
      <Grid display={'row'} textAlign={'center'} sx={{ ml: 3 }}>
        <Typography sx={{ mt: 2, mb: 3, fontSize: '30px' }}>Profile</Typography>
        <Avatar
          sx={{ width: 150, height: 150, margin: 'auto' }}
          alt="Remy Sharp"
          src="https://source.unsplash.com/random"
        />
        <Typography sx={{ mt: 4, fontSize: '25px' }}>Name</Typography>
      </Grid>
      <Grid display={'flex'} textAlign={'center'} sx={{ mt: 5 }}>
        <Grid margin={'auto'} display={'row'} alignItems={'center'}>
          <Typography>rating</Typography>
          <Typography>34234</Typography>
        </Grid>
        <Grid margin={'auto'} display={'row'} textAlign={'center'}>
          <Typography>follow</Typography>
          <Typography>33</Typography>
        </Grid>
        <Grid margin={'auto'} display={'row'} textAlign={'center'}>
          <Typography>follower</Typography>
          <Typography>22</Typography>
        </Grid>
      </Grid>

      <Grid display={'row'} textAlign={'center'} sx={{ ml: 4, mr: 3, mt: 4 }}>
        <Typography sx={{ mt: 2 }} color={'#999'}>
          introduction
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quia, quos voluptates voluptatibus quod
          voluptatem quas quae doloribus quidem. Quisquam voluptatum, quibusdam,
        </Typography>
      </Grid>
    </Grid>
  )
}
