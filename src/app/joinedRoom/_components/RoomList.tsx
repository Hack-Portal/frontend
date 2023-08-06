import { RoomListThumb } from '@/app/room/types/roomList'
import { CenterRecordCard } from '@/components/layouts/CenterRecordCard'
import { Avatar, Input, Typography,Grid,Box } from '@/lib/mui/muiRendering'
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
        <Link href={`/room/${room.room_id}`} key={room.room_id}>
          <Grid
            container
            direction={'row'}
            bgcolor={'#fff'}
            sx={{ width: 800, borderBottom: 'solid 1px #ccc', px: 2, py: 4 }}
            alignItems={'center'}
            gap={2}
            justifyContent={'flex-start'}
          >
            <Avatar
              src={room.hackathon.icon}
              sx={{ width: 50, height: 50, objectFit: 'cover' }}
            />
            <Typography fontSize={'1.5rem'}>{room.title}</Typography>
          </Grid>
        </Link>
      ))}
    </Grid>
  )
}
