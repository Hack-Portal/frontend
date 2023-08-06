
import { Avatar, Box, Grid, Paper, Typography } from '@/lib/mui/muiRendering'
import React from 'react'

export const OtherChatArea = () => {
  return (
    <Grid
      container
      sx={{ mt: 1.5, pl: 2 }}
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
          maxWidth: '70%',
          wordBreak: 'break-word',
        }}
      >
        <Typography color={'#333'}>{'text'}</Typography>
      </Box>
    </Grid>
  )
}
