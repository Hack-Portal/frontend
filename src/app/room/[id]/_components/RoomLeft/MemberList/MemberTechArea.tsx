import { Framework } from '@/types/framework'
import { Tech } from '@/types/tech'
import { Grid, Typography } from '@mui/material'
import React from 'react'

type Props = {
  techs: Tech[] | null
  frameworks: Framework[] | null
}
export const MemberTechArea = (props: Props) => {
  const { techs, frameworks } = props
  return (
    <Grid container direction={'row'}>
      {techs?.map((tech) => (
        <Typography color={'#333'} key={tech.id}>
          {tech.name}
        </Typography>
      ))}
      {frameworks?.map((framework) => (
        <Typography color={'#333'} key={framework.id}>
          {framework.name}
        </Typography>
      ))}
    </Grid>
  )
}
