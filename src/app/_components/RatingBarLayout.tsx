import { Box } from '@mui/system'
import { Chip, Grid, Avatar, Typography } from '@mui/material'
import React from 'react'

type User = {
  id: string
  Ranking_tags: { id: number; name: string }[]
  name: string
  icon: string
  rating: number
}

type Props = {
  users: User[]
}

const RatingBarLayout: React.FC<Props> = ({ users }) => {
  return (
    <>
      <Box sx={{ mt: 5 }}></Box>
      <Typography sx={{ fontSize: '20px', textAlign: 'center', mb: 3 }}>
        レーティングランキング
      </Typography>

      <Grid
        container
        direction="column"
        sx={{
          mt: 2,
          width: '45vh',
        }}
      >
        {users.map((user) => (
          <Grid
            item
            key={user.id}
            sx={{
              mt: 2.5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ mt: 0.5, mb: 1 }} color={'#999'}>
              {user.Ranking_tags[0]?.name}
            </Typography>
            <Avatar sx={{ mb: 1 }} alt={user.name} src={user.icon} />

            <Typography sx={{ mt: 0.5 }} color={'#999'}>
              rating: {user.rating}
            </Typography>
            <Typography sx={{ mt: 0.5 }}>{user.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default RatingBarLayout
