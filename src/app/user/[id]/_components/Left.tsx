'use client'
import { Avatar, Grid, Typography, Chip } from '@/lib/mui/muiRendering'
import React from 'react'
import {
  Domain_AccountResponses,
  Repository_Framework,
  Repository_TechTag,
} from '@/api/@types'

type Props = {
  data: Domain_AccountResponses
  techs: Repository_TechTag[] | undefined
  frameworks: Repository_Framework[] | undefined
  follow: number
  follower: number
}
export const Left = (props: Props) => {
  const { data, techs, follow, follower, frameworks } = props
  return (
    <Grid
      display={'row'}
      sx={{ width: '600px', textAlign: 'center', mr: 1, ml: 1, mt: 5 }}
    >
      <Grid display={'row'} textAlign={'center'}>
        <Typography sx={{ mt: 2, mb: 3, fontSize: '30px' }}>Profile</Typography>
        <Avatar
          sx={{ width: 150, height: 150, margin: 'auto' }}
          src={data.icon}
          alt="Remy Sharp"
        />
        <Typography sx={{ mt: 4, fontSize: '25px' }}>Name</Typography>
      </Grid>

      <Grid display={'flex'} justifyContent={'space-around'} sx={{ mt: 5 }}>
        <Grid alignItems={'center'}>
          <Typography>rating</Typography>
          <Typography>{data.show_rate}</Typography>
        </Grid>
        <Grid textAlign={'center'}>
          <Typography>follow</Typography>
          <Typography>{follow}</Typography>
        </Grid>
        <Grid textAlign={'center'}>
          <Typography>follower</Typography>
          <Typography>{follower}</Typography>
        </Grid>
      </Grid>

      <Grid display={'row'} textAlign={'center'} sx={{ mt: 4 }}>
        <Typography sx={{ mt: 2 }} color={'#999'}>
          introduction
        </Typography>
        <Typography sx={{ mt: 2 }}>{data.explanatory_text}</Typography>
      </Grid>
      <Typography sx={{ mt: 3, mb: 3 }}>Techs & Frameworks</Typography>
      <Grid
        alignContent={'space-around'}
        margin={'auto'}
        display={'flex'}
        justifyContent={'space-around'}
        sx={{ mt: 3, width: '200px' }}
      >
        {techs?.map((tech) => {
          return (
            <Chip sx={{ mt: 2 }} key={tech.tech_tag_id} label={tech.language} />
          )
        })}
        {frameworks?.map((framework) => {
          return (
            <Chip key={framework.framework_id} label={framework.framework} />
          )
        })}
      </Grid>
    </Grid>
  )
}
