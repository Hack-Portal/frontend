import { Grid } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const CenterArea = (props: Props) => {
  const { children } = props
  return (
    <Grid container alignItems={'center'} direction="column" gap={2}>
      {children}
    </Grid>
  )
}
