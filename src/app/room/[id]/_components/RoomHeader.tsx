'use client'
import {
  Box,
  Button,
  Grid,
  IconButton,
  MoreHorizOutlinedIcon,
  Typography,
} from '@/lib/mui/muiRendering'
import Image from 'next/image'
import React from 'react'
import { RoomMenu } from './RoomMenu'
import { Domain_GetRoomResponse, Domain_RoomHackathonInfo } from '@/api/@types'
import { useRoomDetail } from '../_hooks/useRoomDetail'

type Props = {
  hackathons?: Domain_RoomHackathonInfo[]
  roomId: string
}

export const RoomHeader = (props: Props) => {
  const { hackathons, roomId } = props
  const {
    room,
    isMenuOpened,
    anchorEl,
    handleOpenMenu,
    handleCloseMenu,
    isOwner,
  } = useRoomDetail(roomId)
  return (
    <Grid
      container
      direction={'row'}
      sx={{ borderBottom: '2px solid #eee', pl: 2, py: 1 }}
      alignItems={'center'}
    >
      {/* info */}
      <Grid item xs={11.5}>
        <Grid container direction={'column'}>
          <Typography
            sx={{ fontSize: '1.4rem', fontWeight: 'bold' }}
            color={'#333'}
          >
            {room.title}
          </Typography>
          <a
            href={room.hackathon?.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography sx={{ fontSize: '1rem' }} color={'#aaa'}>
              {room.hackathon?.name}
            </Typography>
          </a>
        </Grid>
      </Grid>
      {/* info */}
      {/* tool */}

      <Grid item xs={0.5}>
        <IconButton onClick={handleOpenMenu}>
          <MoreHorizOutlinedIcon color={'action'} />
        </IconButton>

        <RoomMenu
          hackathons={hackathons}
          room={room}
          isOwner={isOwner}
          anchorEl={anchorEl}
          isOpen={isMenuOpened}
          handleClose={handleCloseMenu}
        />
      </Grid>

      {/* tool */}
    </Grid>
  )
}
