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
        <Typography sx={{ mt: 2 }}>Profile</Typography>
        <Avatar
          sx={{ width: 150, height: 150 }}
          alt="Remy Sharp"
          src="https://source.unsplash.com/random"
        />
      </Grid>
      <Grid display={'flex'} xs={4} textAlign={'center'}>
        <Grid display={'row'} alignItems={'center'}>
          <Typography>rating</Typography>
          <Typography>34234</Typography>
        </Grid>
        <Grid display={'row'} textAlign={'center'}>
          <Typography>follow</Typography>
          <Typography>33</Typography>
        </Grid>
        <Grid display={'row'} textAlign={'center'}>
          <Typography>follower</Typography>
          <Typography>22</Typography>
        </Grid>
      </Grid>

      <Grid display={'row'} textAlign={'center'} sx={{ ml: 4, mr: 3 }}>
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
