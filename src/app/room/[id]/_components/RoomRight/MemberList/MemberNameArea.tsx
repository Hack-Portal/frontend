import { Grid, Typography } from '@/lib/mui/muiRendering'
import React from 'react'

type Props = {
  name?: string
  isOwner: boolean
}
export const MemberNameArea = (props: Props) => {
  const { name, isOwner } = props
  return (
    <Grid container direction={'column'} >
      <Typography color={'#333'}>{name}</Typography>
      {isOwner && <Typography color={'#aaa'}>オーナー</Typography>}
    </Grid>
  )
}
