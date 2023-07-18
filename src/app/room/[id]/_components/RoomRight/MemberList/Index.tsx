import React from 'react'
import { Avatar, Grid } from '@mui/material'
import { MemberNameArea } from './MemberNameArea'
import { MemberTechArea } from './MemberTechArea'
import { User } from '@/types/user'
import { RoomInfo } from '../../../types/room'
import { RoomUser } from '../../../types/user'

type Props = {
  users: RoomUser[]
}
const users: RoomUser[] = [
  {
    id: 'user1',
    name: 'User 1',
    icon: '/image/user1.png',
    techs: [
      {
        tech_tag_id: 1,
        language: 'Python',
      },
      {
        tech_tag_id: 1,
        language: 'JavaScript',
      },
    ],
    frameworks: [
      { framework_id: 1, tech_tag_id: 1, framework: 'Django' },
      { framework_id: 2, tech_tag_id: 1, framework: 'Next.js' },
    ],
    isOwner: true,
  },
  {
    id: 'user2',
    name: 'User 2',
    icon: '/image/user2.png',
    techs: [
      {
        tech_tag_id: 1,
        language: 'Python',
      },
      {
        tech_tag_id: 1,
        language: 'JavaScript',
      },
    ],
    frameworks: [
      { framework_id: 1, tech_tag_id: 1, framework: 'Django' },
      { framework_id: 2, tech_tag_id: 1, framework: 'Next.js' },
    ],
    isOwner: false,
  },
  {
    id: 'user3',
    name: 'User 3',
    icon: '/image/user3.png',
    techs: [
      {
        tech_tag_id: 1,
        language: 'Python',
      },
      {
        tech_tag_id: 1,
        language: 'JavaScript',
      },
    ],
    frameworks: [
      { framework_id: 1, tech_tag_id: 1, framework: 'Django' },
      { framework_id: 2, tech_tag_id: 1, framework: 'Next.js' },
    ],
    isOwner: false,
  },
]

const RoomInfo: RoomInfo = {
  room_id: '7b547df5-e692-46d2-aed3-04059775a2f8',
  title: '技育CAMP.vol7 初心者',
  description: 'わいわいしましょう！',
  is_delete: true,
  member_limit: 5,
  created_at: '',
  Hackathon: {
    hackathon_id: 1,
    name: '技育CAMP.vol7',
    description: 'This is a dummy hackathon event.',
    icon: '',
    expired: '',
    start_date: '',
    term: 7,
    link: '',
    HackathonStatusTag: [
      {
        status_id: 1,
        status: '開催前',
      },
    ],
  },
  RoomsTechTags: [
    {
      tech_tag: {
        tech_tag_id: 1,
        language: 'Python',
      },
      count: 1,
    },
    {
      tech_tag: {
        tech_tag_id: 2,
        language: 'JavaScript',
      },
      count: 1,
    },
    {
      tech_tag: {
        tech_tag_id: 3,
        language: 'Java',
      },
      count: 1,
    },
    {
      tech_tag: {
        tech_tag_id: 5,
        language: 'C',
      },
      count: 1,
    },
    {
      tech_tag: {
        tech_tag_id: 7,
        language: 'Cpp',
      },
      count: 1,
    },
  ],
  RoomsFrameworks: [
    {
      framework: {
        framework_id: 1,
        tech_tag_id: 1,
        framework: 'Django',
      },
      count: 1,
    },
    {
      framework: {
        framework_id: 2,
        tech_tag_id: 1,
        framework: 'Flask',
      },
      count: 1,
    },
    {
      framework: {
        framework_id: 4,
        tech_tag_id: 2,
        framework: 'React.js',
      },
      count: 1,
    },
    {
      framework: {
        framework_id: 5,
        tech_tag_id: 2,
        framework: 'Vue.js',
      },
      count: 1,
    },
    {
      framework: {
        framework_id: 6,
        tech_tag_id: 2,
        framework: 'Three.js',
      },
      count: 1,
    },
    {
      framework: {
        framework_id: 8,
        tech_tag_id: 2,
        framework: 'Node.js',
      },
      count: 1,
    },
  ],
}

const tabValue = 0 // or 1 based on your need

export const MemberList = () => {
  return (
    <Grid
      container
      sx={{ maxHeight: '90vh', p: 0 }}
      direction={'column'}
      wrap="nowrap"
    >
      {users.map((user) => (
        <Grid
          sx={{
            py: 3,
            borderBottom: '1px solid #ddd',
            minWidth: '100%',
            pl: 2,
          }}
          container
          key={user.id}
          direction={'row'}
          wrap="nowrap"
          justifyContent={'center'}
        >
          <Avatar src={user.icon} />
          <Grid container direction={'column'}>
            <MemberNameArea name={user.name} isOwner={user.isOwner} />
            <MemberTechArea techs={user.techs} frameworks={user.frameworks} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}
