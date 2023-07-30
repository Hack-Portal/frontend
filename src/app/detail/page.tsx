'use client'
import { Header } from '@/components/layouts/Header'
import React from 'react'
import { HackathonData } from './_components/HackathonData'
import { RightCard } from './_components/RightCard'
import { Box } from '@mui/joy'
import { Left } from './_components/Left'

const Detail = () => {
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
          <Left />
          <HackathonData />
          <RightCard />
        </Box>
      </Box>
    </>
  )
}

export default Detail
