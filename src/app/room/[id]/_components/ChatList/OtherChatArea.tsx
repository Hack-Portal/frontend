import { Sheet } from '@mui/joy'
import { Avatar, Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

export const OtherChatArea = () => {
  return (
    <Grid
      container
      width={'100%'}
      direction={'row'}
      gap={1}
      justifyContent={'flex-start'}
    >
      <Avatar src={'https://source.unsplash.com/random'} variant="rounded" />
      <Box
        sx={{
          bgcolor: '#eee',
          borderRadius: '0 10px 10px 10px',
          p: 1,
          minWidth: 500,
          maxWidth: 500,
          wordBreak: 'break-word',
        }}
      >
        <Typography color={'#333'}>
          {
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          }
        </Typography>
      </Box>
    </Grid>
  )
}
