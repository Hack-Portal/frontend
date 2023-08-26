import {
  Grid,
  Typography,
} from '@/lib/mui/muiRendering'
import React from 'react'

type Props = {
  name: string
  children: React.ReactNode
}
export const Content = (props: Props) => {
  const { children, name } = props

  return (
    <Grid width={"33%"}>
      <Typography sx={{ fontSize: '14px', textAlign: 'left' }} color={'#999'}>
        {name}
      </Typography>
      <Grid container direction={'row'} sx={{ mb: 1.5 }}>
        {children}
      </Grid>
    </Grid>
  )
}
