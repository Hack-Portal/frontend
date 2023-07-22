'use client'
import { Header } from '@/components/layouts/Header'
import { Box, Container, Grid } from '@mui/joy'
import { Paper, Typography } from '@mui/material'
import React from 'react'
import { Left } from './_components/Left'
import { Center } from './_components/Center'

const profileDetail = () => {
  return (
    <>
      <Header />
      <Paper sx={{ width: '1500px', display: 'flex' }}>
        <Left />
        <Center />
      </Paper>
    </>
  )
}
export default profileDetail
