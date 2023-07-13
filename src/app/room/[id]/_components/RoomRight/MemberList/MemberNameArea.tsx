import { Grid, Typography } from '@mui/material'
import React from 'react'

type Props = {
  name: string
  isOwner: boolean
}
export const MemberNameArea = (props: Props) => {
  const { name, isOwner } = props
  return (
    <Grid  container direction={'row'} sx={{width:"80%"}} ml={1}>
      <Typography color={'#333'}>{name}</Typography>
      {isOwner && (
        <Typography
          sx={{ ml: 1 }}
          color={'#aaa'}
        >
          オーナー
        </Typography>
      )}
    </Grid>
  )
}
