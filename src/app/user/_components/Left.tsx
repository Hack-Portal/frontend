import { Avatar, Box, Button, Grid } from '@mui/joy'
import { Typography } from '@mui/material'
import React from 'react'

export const Left = () => {
  return (
    <Grid width={500} display={'row'} sx={{ textAlign: 'center' }}>
      <Grid display={'row'} textAlign={'center'} sx={{ ml: 3 }}>
        <Typography sx={{ mt: 2 }}>Profile</Typography>
        <Avatar
          sx={{ width: 150, height: 150 }}
          alt="Remy Sharp"
          src="https://source.unsplash.com/random"
        />
        <Typography sx={{ mt: 2 }}>John Doe</Typography>
      </Grid>
      <Grid container display={'flex'} textAlign={'center'}>
        <Grid
          display={'row'}
          xs={3}
          sx={{ mb: 2, ml: 4, mr: 3 }}
          alignItems={'center'}
        >
          <Typography>rating</Typography>
          <Typography sx={{ mt: 2 }}>34234</Typography>
        </Grid>
        <Grid display={'row'} textAlign={'center'} xs={3} sx={{ mb: 2, mr: 3 }}>
          <Typography>follow</Typography>
          <Typography sx={{ mt: 2 }}>33</Typography>
        </Grid>
        <Grid display={'row'} textAlign={'center'} sx={{ ml: 4, mr: 3 }}>
          <Typography>follower</Typography>
          <Typography sx={{ mt: 2 }}>22</Typography>
        </Grid>
      </Grid>

      <Grid display={'row'} textAlign={'center'} sx={{ ml: 4, mr: 3 }}>
        <Button sx={{ mt: 2, ml: 4, mr: 3 }}>Update Profile</Button>
        <Button sx={{ mt: 2, ml: 4, mr: 3 }}>Delete</Button>
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
