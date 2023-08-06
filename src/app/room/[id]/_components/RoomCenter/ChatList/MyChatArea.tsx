
import { Avatar, Box, Grid, Paper, Typography } from '@/lib/mui/muiRendering'
import React from 'react'
import Image from 'next/image'

interface MyChatAreaProps {
  text: string
}

export const MyChatArea: React.FC<MyChatAreaProps> = ({ text }) => {
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
        <Typography color={'#fff'}>{text}</Typography>
      </Box>
      <Avatar src={'/image/user1.png'} variant="rounded" />
    </Grid>
  )
}
