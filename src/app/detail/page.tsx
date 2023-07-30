'use client'
import { Header } from '@/components/layouts/Header'
import React from 'react'
import { HackathonData } from './_components/HackathonData'
import { RightCard } from './_components/RightCard'
import { Box } from '@mui/joy'

const Detail = () => {
  return (
    <>
      <Header />
      <Box display={'flex'} justifyContent={'center'}>
        <HackathonData />
        <RightCard />
      </Box>
    </>
  )
}

export default Detail
