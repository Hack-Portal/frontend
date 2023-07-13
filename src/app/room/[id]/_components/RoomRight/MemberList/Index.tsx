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
    <Grid container sx={{maxHeight:"90vh",p:0}} direction={'column'} wrap='nowrap' >
      {users.map((user) => (
        <Grid
          sx={{ py: 3 ,borderBottom:"1px solid #ddd",minWidth:"100%",pl:2}}
         container
          key={user.id}
          direction={'row'}
          wrap="nowrap"
          justifyContent={'center'}
        >
          <Avatar src={user.icon} />
          <Grid container direction={'column'} >
            <MemberNameArea name={user.name} isOwner={user.isOwner} />
            <MemberTechArea techs={user.techs} frameworks={user.frameworks} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}
