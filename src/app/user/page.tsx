'use client'
import { Header } from '@/components/layouts/Header'
import { Box, Container, Grid } from '@mui/joy'
import { Button, Paper, Typography } from '@mui/material'
import React from 'react'
import { Left } from './_components/Left'
import { Center } from './_components/Center'
import { Reight } from './_components/Reight'

const profile = () => {
  return (
    <>
      <Header />

      <Paper
        elevation={5}
        sx={{
          margin: 'auto',
          width: '1600px',
          height: '1000px',
          display: 'flex',
          mb: 10,
        }}
      >
        <Left />
        <Center />
        <Reight />
      </Paper>
    </>
  )
}
export default profile
