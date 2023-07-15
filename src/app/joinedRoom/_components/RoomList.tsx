import { RoomListThumb } from '@/app/room/room'
import { CenterRecordCard } from '@/components/layouts/CenterRecordCard'
import { Avatar, Input, Typography } from '@mui/joy'
import { Grid, Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'

type Props = {
  rooms: RoomListThumb[]
}

export const RoomList = (props: Props) => {
  const { rooms } = props
  return (
    <Grid
      sx={{ minHeight: '90vh', position: 'absolute', top: '10vh' }}
      width={800}
      bgcolor={'#fff'}
      justifyContent={'center'}
    >
      <Grid
        container
        direction={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={0}
        sx={{
          px: 2,
          py: 4,
          borderBottom: 'solid 1px #ccc',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: '#eee',
            borderRadius: '5px',
          }}
          px={1}
        >
          <Input
            placeholder="Search for anything..."
            variant="soft"
            size="sm"
            sx={{
              solid: '6px #e0e0e0',
              '--Input-radius': '40px',
              '--Input-paddingInline': '12px',
              width: 300,
              display: { xs: 'none', lg: 'flex' },
            }}
          />
          <SearchIcon sx={{ color: '#ccc' }} />
        </Box>
      </Grid>
      {rooms.map((room) => (
        <Link href={`/room/${room.id}`} key={room.id}>
          <Grid
            container
            direction={'row'}
            bgcolor={'#fff'}
            sx={{ width: 800, borderBottom: 'solid 1px #ccc', px: 2, py: 4 }}
            alignItems={'center'}
            gap={2}
            justifyContent={'flex-start'}
          >
            {/* <Avatar
              // src={roomicon}
              sx={{ width: 50, height: 50, objectFit: 'cover' }} */}
            {/* /> */}
            <Typography fontSize={'1.5rem'}>{room.title}</Typography>
          </Grid>
        </Link>
      ))}
    </Grid>
  )
}
