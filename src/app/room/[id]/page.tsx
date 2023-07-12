'use client'

import { Header } from '@/components/layouts/Header'
import React from 'react'
import { RoomLeft } from './_components/RoomLeft/Index'
import { RoomRight } from './_components/RoomRight/Index'
import { Box, Grid } from '@mui/material'
import { RoomCenter } from './_components/RoomCenter/Index'
import { RoomInfo } from './types/room'
import { useTab } from '@/hooks/useTab'

type Props = {}
const RoomDetail = (props: Props) => {
  console.log(props)
  const room: RoomInfo = {
    id: 1,
    hackathon: {
      id: 1,
      description: 'hack_description',
      name: 'hackathon_name',
      icon: 'https://source.unsplash.com/random',
      expired: '2021-10-10',
      start_date: '2021-10-10',
      term: 5,
      hackthon_tag: ['tag1', 'tag2'],
    },
    title: 'room1',
    description: 'setumei',
    member_limit: 5,
    tech_tags: [
      { id: 1, name: 'TypeScript' },
      { id: 2, name: 'JavaScript' },
    ],
    frameworks: [
      { id: 1, name: 'Node.js' },
      { id: 2, name: 'NEXT.js' },
      { id: 3, name: 'Node.js' },
      { id: 4, name: 'Ruby on Rails' },
      { id: 5, name: 'Node.js' },
    ],
    users: [
      {
        id: '1',
        name: 'test1',
        icon: 'https://source.unsplash.com/random',
        isOwner: true,
        techs: [
          { id: 1, name: 'React' },
          { id: 2, name: 'TypeScript' },
        ],
        frameworks: [
          { id: 1, name: 'Next.js' },
          { id: 2, name: 'Ruby on Rails' },
          { id: 3, name: 'Node.js' },
        ],
      },
      {
        id: '2',
        name: 'test2',
        icon: 'https://source.unsplash.com/random',
        isOwner: false,
        techs: [
          { id: 1, name: 'React' },
          { id: 2, name: 'TypeScript' },
        ],
        frameworks: [
          { id: 1, name: 'Next.js' },
          { id: 2, name: 'Ruby on Rails' },
          { id: 3, name: 'Node.js' },
        ],
      },
      {
        id: '3',
        name: 'test3',
        icon: 'https://source.unsplash.com/random',
        isOwner: true,
        techs: [
          { id: 1, name: 'React' },
          { id: 2, name: 'TypeScript' },
        ],
        frameworks: [
          { id: 1, name: 'Next.js' },
          { id: 2, name: 'Ruby on Rails' },
          { id: 3, name: 'Node.js' },
        ],
      },
      {
        id: '4',
        name: 'test4',
        icon: 'https://source.unsplash.com/random',
        isOwner: false,
        techs: [
          { id: 1, name: 'React' },
          { id: 2, name: 'TypeScript' },
        ],
        frameworks: [
          { id: 1, name: 'Next.js' },
          { id: 2, name: 'Ruby on Rails' },
          { id: 3, name: 'Node.js' },
        ],
      },
      {
        id: '5',
        name: 'test5',
        icon: 'https://source.unsplash.com/random',
        isOwner: true,
        techs: [
          { id: 1, name: 'React' },
          { id: 2, name: 'TypeScript' },
        ],
        frameworks: [
          { id: 1, name: 'Next.js' },
          { id: 2, name: 'Ruby on Rails' },
          { id: 3, name: 'Node.js' },
        ],
      },
    ],
  }

  const { users, ...roomInfo } = room
  const { tab, handleSetTab } = useTab()
  console.log(tab)

  return (
    <Box
      sx={{
        bgcolor: '#fff',
      }}
    >
      <Header />

      <Grid
        container
        justifyContent={'center'}
        sx={{
          height: '120vh',
          position: 'absolute',
          overflowY: 'scroll',
        }}
      >
        <Grid item xs>
          <RoomRight
            roomInfo={roomInfo}
            tab={tab}
            handleSetTab={handleSetTab}
          />
        </Grid>
        {/* member */}

        {/* chat */}
        <RoomCenter />
        {/* chat info */}
        <Grid item xs>
          <RoomLeft users={users} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default RoomDetail
