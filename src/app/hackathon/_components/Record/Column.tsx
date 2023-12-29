
import { Grid, Typography } from '@mui/material'
import React, { ReactNode } from 'react'

type Props={
    title:string
    date?:string
    icon:ReactNode
}
export const Column = (props:Props) => {
    const {title,date,icon}=props
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
          {date}
        </Typography>
      </Grid>
    </Grid>
  )
}