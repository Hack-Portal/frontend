import React from 'react'
import { Grid, Box, Paper, CardMedia } from '@mui/material'
import { Typography } from '@mui/joy'
export const HackathonData = () => {
  return (
    <Grid container display={'flex'} flexDirection={'column'}>
      <Grid margin={'auto'}>
        <CardMedia
          component="img"
          image="image/1.jpg"
          alt="img"
          sx={{ width: '1800px', height: '900px' }}
        />
      </Grid>
      <Grid>
        <Box sx={{ width: '1800px' }} margin={'auto'}>
          <Paper>
            <Typography>Hackathon</Typography>
            <Typography>2021</Typography>
            <Typography>description</Typography>
            <Typography>link</Typography>
            <Typography>expired</Typography>
            <Typography>start_date</Typography>
            <Typography>term</Typography>
            <Typography>HackathonStatusTag</Typography>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  )
}
