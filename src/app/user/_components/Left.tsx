import { Avatar, Box, Button, Grid } from '@mui/joy'
import { Typography, Chip } from '@mui/material'
import React from 'react'
import Item from '@mui/material/ListItem'
export const Left = () => {
  return (
    <Grid
      display={'row'}
      sx={{ width: '600px', textAlign: 'center', mr: 1, ml: 1, mt: 5 }}
    >
      <Grid display={'row'} textAlign={'center'}>
        <Typography sx={{ mt: 2, mb: 3, fontSize: '30px' }}>Profile</Typography>
        <Avatar
          sx={{ width: 150, height: 150, margin: 'auto' }}
          alt="Remy Sharp"
          src="https://source.unsplash.com/random"
        />
        <Typography sx={{ mt: 4, fontSize: '25px' }}>Name</Typography>
      </Grid>

      <Grid display={'flex'} justifyContent={'space-around'} sx={{ mt: 5 }}>
        <Grid alignItems={'center'}>
          <Typography>rating</Typography>
          <Typography>34234</Typography>
        </Grid>
        <Grid textAlign={'center'}>
          <Typography>follow</Typography>
          <Typography>33</Typography>
        </Grid>
        <Grid textAlign={'center'}>
          <Typography>follower</Typography>
          <Typography>22</Typography>
        </Grid>
      </Grid>

      <Grid display={'row'} textAlign={'center'} sx={{ mt: 4 }}>
        <Typography sx={{ mt: 2 }} color={'#999'}>
          introduction
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quia, quos voluptates voluptatibus quod
          voluptatem quas quae doloribus quidem. Quisquam voluptatum, quibusdam,
        </Typography>
      </Grid>
      <Typography sx={{ mt: 3, mb: 3 }}>Techs & Frameworks</Typography>
      <Grid
        alignContent={'space-around'}
        margin={'auto'}
        display={'flex'}
        justifyContent={'space-around'}
        sx={{ mt: 3, width: '200px' }}
      >
        <Chip label="Javascript" />
        <Chip label="Javascript" />
      </Grid>

      <Typography sx={{ mt: 3, mb: 3 }}>受賞</Typography>
      <Grid
        width={'300px'}
        margin={'auto'}
        display={'flex'}
        flexDirection={'column'}
        sx={{ mt: 3 }}
      >
        <Chip sx={{ mt: 2 }} label="技育CampハッカソンVol.6 企業賞" />
        <Chip sx={{ mt: 2 }} label="技育CampハッカソンVol.6 企業賞" />
      </Grid>
    </Grid>
  )
}
