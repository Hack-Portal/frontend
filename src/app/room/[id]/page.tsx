'use client'

import { Header } from '@/components/layouts/Header'
import React from 'react'
import { RoomLeft } from './_components/RoomLeft/Index'
import { RoomRight } from './_components/RoomRight/Index'
import { Grid } from '@mui/material'
import { RoomCenter } from './_components/RoomCenter/Index'
import { RoomInfo } from './types/room'
import { useTab } from '@/hooks/useTab'

type Props = {}
const RoomDetail = (props: Props) => {
  console.log(props)
  const room:RoomInfo = {
    id: 1,
    hackathon: {
        id: 1,
    description: "hack_description",
    name: "hackathon_name",
    icon: "https://source.unsplash.com/random",
    expired: "2021-10-10",
    start_date: "2021-10-10",
    term: 5,
    hackthon_tag:[
        "tag1",
        "tag2",
    ]
    },
    title: "room1",
    description: "setumei",
    member_limit: 5,
    tech_tags: [
        {id:1,name:"tech1"},
        {id:2,name:"tech1"},
        ],
    frameworks: [
        {id:1,name:"framework1"},
        {id:2,name:"framework2"},
        ],
    users: [
      {
        id: "1",
        name: 'test1',
        icon: 'https://source.unsplash.com/random',
        isOwner: true,
        techs: [
          { id: 1, name: 'React' },
          { id: 2, name: 'TypeScript' },
        ],
        frameworks: [{ id: 1, name: 'Next.js' }],
      },
      {
        id: "2",
        name: 'test1',
        icon: 'https://source.unsplash.com/random',
        isOwner: true,
        techs: [
          { id: 1, name: 'React' },
          { id: 2, name: 'TypeScript' },
        ],
        frameworks: [{ id: 1, name: 'Next.js' }],
      }
    ],
  }

  const {users,...roomInfo} = room
  const {tab,handleSetTab}=useTab()
  console.log(tab);
  
  return (
    <>
      <Header />
      <Grid
        container
        direction={'row'}
        justifyContent={'center'}
        sx={{ height: '90vh', position: 'absolute', top: '10.1vh' ,maxHeight: '90vh',overflowY:'scroll'}}
      >
        {/* member */}
        <Grid item xs>
          <RoomLeft users={users} />
        </Grid>
        {/* chat */}
        <RoomCenter />
        {/* chat info */}
        <Grid item xs>
          <RoomRight roomInfo={roomInfo} tab={tab} handleSetTab={handleSetTab}/>
        </Grid>
      </Grid>
    </>
  )
}

export default RoomDetail
