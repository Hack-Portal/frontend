import { Grid, Typography } from '@mui/material'
import React from 'react'

type Props = {
    name:string
    isOwner:boolean
}
export const MemberNameArea = (props:Props) => {
    const { name, isOwner } = props
  return (
    <Grid container direction={'row'}>
      <Typography color={'#333'}>{name}</Typography>
      {isOwner && <Typography color={'#333'}>オーナー</Typography>}
    </Grid>
  )
}
