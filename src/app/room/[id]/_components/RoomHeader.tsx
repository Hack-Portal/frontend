import { Grid, MoreHorizOutlinedIcon, Typography } from '@/lib/mui/muiRendering'
import Image from 'next/image'
import React from 'react'

type Props = Partial<{
  teamName: string
  hackathonName: string
  link: string
}>

export const RoomHeader = (props: Props) => {
  const { teamName, hackathonName, link } = props
  return (
    <Grid container direction={'row'} sx={{borderBottom:"2px solid #eee",pl:2,py:1}} alignItems={"center"}>
      {/* info */}
      <Grid item xs={11.5}>
        <Grid container direction={'column'}>
          <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold' }} color={"#333"}>
            {teamName}
          </Typography>
          <a href={link} target='_blank' rel="noopener noreferrer">
            <Typography sx={{ fontSize: '1rem' }} color={"#aaa"} >{hackathonName}</Typography>
          </a>
        </Grid>
      </Grid>
      {/* info */}
      {/* tool */}
      <Grid item xs={0.5}>
       <MoreHorizOutlinedIcon color={"action"}/>
      </Grid>
      {/* tool */}
    </Grid>
  )
}
