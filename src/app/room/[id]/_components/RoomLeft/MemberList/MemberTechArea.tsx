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
    <Grid container sx={{ ml: 4, mt: 3 }} xs={6} direction={'row'}>
      {techs?.map((tech) => <Chip label={tech.name} key={tech.id} />)}
      {frameworks?.map((framework) => (
        <Chip label={framework.name} key={framework.id} />
      ))}
    </Grid>
  )
}
