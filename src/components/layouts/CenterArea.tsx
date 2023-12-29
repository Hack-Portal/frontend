
import { Grid } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  gap?: number
}
export const CenterArea = (props: Props) => {
  const { children, gap = 2 } = props
  return (
    <Grid container alignItems={'center'} direction="column" gap={gap} sx={{width:"100%"}}>
      {children}
    </Grid>
  )
}
