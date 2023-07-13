import { Framework } from '@/types/framework'
import { Tech } from '@/types/tech'
import { Chip, Grid, Typography } from '@mui/material'
import React from 'react'

type Props = {
  techs: Tech[] | null
  frameworks: Framework[] | null
}
export const MemberTechArea = (props: Props) => {
  const { techs, frameworks } = props
  return (
    <Grid container sx={{ pl: 1,pt:1,minWidth:"100%" }} xs={6} direction={'row'}gap={1}>
      {techs?.map((tech) => (
        <Chip
          label={tech.name}
          key={tech.id}
          sx={{ fontSize: '0.6rem', fontWeight: 'bold' ,}}
        />
      ))}
      {frameworks?.map((framework) => (
        <Chip
          label={framework.name}
          key={framework.id}
          sx={{ fontSize: '0.6rem', fontWeight: 'bold',p:0.1 }}
        />
      ))}
    </Grid>
  )
}
