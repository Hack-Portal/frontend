import { Box, Typography } from '@/lib/mui/muiRendering'
import React, { Suspense } from 'react'
import HacakathonPostForm from './_components/HacakathonPostForm'
import { FetchStatusTags } from '../post_hackathon/_services/FetchTagsService'

const Home = () => {
  const fetchStatusTags = new FetchStatusTags()
  const statusTags = fetchStatusTags.fetchAllStatusTags()
  return (
    <Box
      sx={{
        width: '600px',
        margin: '0 auto',
        mt: 5,
      }}
    >
      <Typography variant="h3">Post Hackathon</Typography>
      <Suspense fallback={<div>Loading...</div>}>
        {statusTags && <HacakathonPostForm statusTags={statusTags} />}
      </Suspense>
    </Box>
  )
}

export default Home
