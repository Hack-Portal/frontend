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
      {techs?.map((tech) => (
        <Chip sx={{ mt: 0.5 }} label={tech.tech_tag_id} key={tech.language} />
      ))}
      {frameworks?.map((framework) => (
        <Chip
          sx={{ mt: 0.5 }}
          label={framework.framework_id}
          key={framework.tech_tag_id}
        />
      ))}
    </Grid>
  )
}
