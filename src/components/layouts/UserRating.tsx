import React from 'react'
import { Grid, Avatar, Typography, Card } from '@/lib/mui/muiRendering'
import { FetchRating } from '../../app/_services/fetchRating'
import { type } from 'os'
import { RatingInterface } from '@/types/RatingInterface'

const UserRating = async () => {
  const fetchRatings = new FetchRating()
  const indexRating = await fetchRatings.fetchRating()

  type User = {
    user: RatingInterface
    index: number
  }

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
      {/* //型が違う */}
      {indexRating.map((user: any, index: number) => (
        <Grid
          item
          key={user.account_id}
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
          <Avatar alt={user.username} src={indexRating.icon} />

          <Typography>{user.username}</Typography>
          <Typography color={'#999'}>rating: {user.rate}</Typography>
        </Grid>
      ))}
    </Card>
  )
}

export default UserRating
