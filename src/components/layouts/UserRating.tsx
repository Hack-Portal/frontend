import React from 'react'
import { Grid, Avatar, Typography } from '@/lib/mui/muiRendering'
import { UserRatingInfo } from '../types/userRating'

type Props = {
  users: UserRatingInfo[]
}

const UserRating = (props: Props) => {
  const { users } = props
  return (
    <Grid container direction={'column'} alignItems={'center'}>
      <Typography>レーティング</Typography>

      {users.map((user, index) => (
        <Grid
          item
          key={user.id}
          sx={{
            mt: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            mb={1}
            color={
              index + 1 === 1
                ? '#e6b422'
                : index + 1 === 2
                ? '#999'
                : index + 1 === 3
                ? '#b87333'
                : '#333'
            }
          >
            {index + 1}位
          </Typography>
          <Avatar alt={user.name} src={user.icon} />

          <Typography>{user.name}</Typography>
          <Typography color={'#999'}>rating: {user.rating}</Typography>
        </Grid>
      ))}
    </Grid>
  )
}

export default UserRating
