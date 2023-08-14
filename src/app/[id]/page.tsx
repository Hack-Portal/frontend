'use client'

import { Header } from '@/components/layouts/Header'
import React, { Suspense } from 'react'
import { HackathonData } from './_components/HackathonData'
import { RightCard } from './_components/RightCard'
import { Box } from '@/lib/mui/muiRendering'
import { FetchHackathonDetail } from './_services/fetchHackathonDetail'

const Detail = async (props: { params: { id: string } }) => {
  const { id } = props.params
  // const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const fetchHackathon = new FetchHackathonDetail()
  const hackathonDetail = await fetchHackathon.fetchHackathonDetail(id)
  return (
    <>
      <Header />
      <Box display={'flex'} justifyContent={'center'}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: '8px',
          }}
        >
          <Suspense fallback={<div>loading...</div>}>
            {hackathonDetail && <HackathonData detail={hackathonDetail} />}
            {hackathonDetail && <RightCard detail={hackathonDetail} />}
          </Suspense>
        </Box>
      </Box>
    </>
  )
}

export default Detail
