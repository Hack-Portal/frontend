import { Grid, SensorDoorOutlinedIcon, Typography } from '@/lib/mui/muiRendering'
import React, { ReactNode } from 'react'

type Props={
    title:string
    value?:string
    icon:ReactNode
}
export const HacakathonColumn = (props:Props) => {
    const {title,value,icon}=props
  return (
    <Grid container alignItems={"center"} direction={"row"} wrap={"nowrap"} gap={1.5}>
     {icon}
      <Grid container direction={'column'} >
        <Typography
          color={"#aaa"}
          sx={{ fontSize: "1rem" }}
        >
          {title}
        </Typography>
        <Typography sx={{ mt: 0.5, fontSize:'1.2rem'}}>
          {value}
        </Typography>
      </Grid>
    </Grid>
  )
}
