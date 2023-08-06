import { Framework } from '@/types/framework'
import { Tech } from '@/types/tech'
import { Chip, Grid } from '@/lib/mui/muiRendering'
import React from 'react'

type Props = {
  techs: Tech[] | null
  frameworks: Framework[] | null
}

export const MemberTechArea = (props: Props) => {
  // Use the first user's techs and frameworks from the mock data
  const { techs, frameworks } = props

  return (
    <Grid
      container
      sx={{ pl: 1, pt: 1, minWidth: '100%' }}
      xs={6}
      direction={'row'}
      gap={1}
    >
      {techs?.map((tech) => (
        <Chip
          label={tech.language}
          key={tech.tech_tag_id}
          sx={{ fontSize: '0.6rem', fontWeight: 'bold' }}
        />
      ))}
      {frameworks?.map((framework) => (
        <Chip
          label={framework.framework}
          key={framework.framework_id}
          sx={{ fontSize: '0.6rem', fontWeight: 'bold', p: 0.1 }}
        />
      ))}
    </Grid>
  )
}
