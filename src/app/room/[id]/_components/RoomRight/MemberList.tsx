import React from 'react'
import { Avatar, Grid } from '@/lib/mui/muiRendering'
import { MemberNameArea } from './MemberList/MemberNameArea'
import { MemberTechArea } from './MemberList/MemberTechArea'
import { Domain_NowRoomAccounts } from '@/api/@types'

type Props = {
  users: Domain_NowRoomAccounts[]
}

export const MemberList = (props: Props) => {
  const { users } = props
  return (
    <Grid
      container
      sx={{ maxHeight: '90vh', p: 0 }}
      direction={'column'}
      wrap="nowrap"
    >
      {users.map((user) => (
        <Grid
          sx={{
            py: 3,
            borderBottom: '1px solid #ddd',
            minWidth: '100%',
            pl: 2,
          }}
          container
          key={user.account_id}
          direction={'row'}
          wrap="nowrap"
          justifyContent={'center'}
          gap={1.5}
        >
          <Avatar src={user.icon} />
          <Grid container direction={'column'} justifyContent={"center"} wrap='nowrap'>
            <MemberNameArea name={user.username} isOwner={user.is_owner!} />
            <MemberTechArea techs={user.tech_tags} frameworks={user.frameworks} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}
