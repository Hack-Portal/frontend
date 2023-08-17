import React from 'react'
import { Grid, Avatar, Typography, Card } from '@/lib/mui/muiRendering'
import { UserRatingInfo } from '../types/userRating'

const users: UserRatingInfo[] = [
  {
    id: '1',
    name: 'user1',
    icon: '/images/user1.png',
    rating: 1000,
  },
  {
    id: '2',
    name: 'user2',
    icon: '/images/user2.png',
    rating: 900,
  },
  {
    id: '3',
    name: 'user3',
    icon: '/images/user3.png',
    rating: 800,
  },
]
const UserRating = () => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 3,
        width: '15vw',
      }}
    >
      <Typography>レーティング</Typography>

      {users.map((user, index) => (
        <Grid
          item
          key={user.id}
          sx={{
            mt: 3,
            mb: 2,
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
    </Card>
  )
}

export default UserRating
