import { Sheet } from '@mui/joy'
import { Avatar, Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

export const MyChatArea = () => {
  return (
    <Grid
      container
      width={'100%'}
      direction={'row'}
      gap={1}
      justifyContent={'flex-end'}
    >
      <Box
        sx={{
          bgcolor: 'primary.light',
          borderRadius: '10px 0 10px 10px',
          p: 1,
          minWidth: 500,
          maxWidth: 500,
          wordBreak: 'break-word',
        }}
      >
        <Typography color={'#fff'}>
          {
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          }
        </Typography>
      </Box>
      <Avatar src={'https://source.unsplash.com/random'} variant="rounded" />
    </Grid>
  )
}
