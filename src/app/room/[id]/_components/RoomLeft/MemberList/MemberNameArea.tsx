import { Grid, Typography } from '@mui/material'
import React from 'react'

type Props = {
  name: string
  isOwner: boolean
}
export const MemberNameArea = (props: Props) => {
  const { name, isOwner } = props
  return (
    <Grid sx={{ ml: 4.5 }} container direction={'row'}>
      <Typography color={'#333'}>{name}</Typography>
      {isOwner && (
        <Typography
          sx={{ borderBottom: 4, borderColor: 'divider', ml: 4 }}
          color={'#333'}
        >
          オーナー
        </Typography>
      )}
    </Grid>
  )
}
