import React from 'react'
import { RoomUser } from '../../../types/user'
import { Avatar, Grid, Typography } from '@mui/material'
import { MemberNameArea } from './MemberNameArea'
import { MemberTechArea } from './MemberTechArea'

type Props = {
  users: RoomUser[]
}

export const MemberList = (props: Props) => {
  const { users } = props
  return (
    <Grid container sx={{ height: '100vh' }} direction={'column'}>
      {users.map((user) => (
        <Grid
          sx={{ mt: 4 }}
          container
          key={user.id}
          direction={'row'}
          wrap="nowrap"
        >
          <Avatar src={user.icon} />
          <Grid container direction={'column'}>
            <MemberNameArea name={user.name} isOwner={user.isOwner} />
            <MemberTechArea techs={user.techs} frameworks={user.frameworks} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}
