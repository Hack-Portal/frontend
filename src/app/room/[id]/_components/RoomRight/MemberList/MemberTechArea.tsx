
import { Repository_Framework, Repository_TechTag } from '@/api/@types'
import { Chip, Grid } from '@/lib/mui/muiRendering'
import React from 'react'

type Props = {
  techs?: Repository_TechTag[] 
  frameworks?:  Repository_Framework[]
}

export const MemberTechArea = (props:Props) => {
  
  const { techs, frameworks } = props

  return (
    <Grid
      container
      sx={{ pl: 1, pt: 1, minWidth: '100%' }}
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
