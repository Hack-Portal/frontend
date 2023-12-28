import { Box, Typography } from '@/lib/mui/muiRendering'
import React from 'react'
import HacakathonPostForm from './_components/HacakathonPostForm'

const Home = () => {
  return (
    <Box
      sx={{
        width: '600px',
        margin: '0 auto',
        mt: 5,
      }}
    >
      <Typography variant="h3">Post Hackathon</Typography>
      <HacakathonPostForm />
    </Box>
  )
}

export default Home
