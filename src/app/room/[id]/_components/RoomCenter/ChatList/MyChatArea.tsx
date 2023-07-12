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
      sx={{ mt: 1.5, pr: 2 }}
    >
      <Box
        sx={{
          bgcolor: 'primary.light',
          borderRadius: '10px 0 10px 10px',
          p: 1,
          textAlign: 'right',
          maxWidth: '70%',
          wordBreak: 'break-word',
        }}
      >
        <Typography color={'#fff'}>
          {
            '初参加です！！！よろしくお願いします！！！！fbrrrrrrrrrrrrrrrraqddvccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc'
          }
        </Typography>
      </Box>
      <Avatar src={'https://source.unsplash.com/random'} variant="rounded" />
    </Grid>
  )
}
