import React from 'react'
import { Grid, Avatar, Typography, Card, Rating } from '@/lib/mui/muiRendering'
import { FetchRating } from '../../app/_services/fetchRating'
import { type } from 'os'
import { RatingInterface } from '@/types/RatingInterface'

const ratingRating = async () => {
  const fetchRatings = new FetchRating()
  const indexRating = await fetchRatings.fetchRating()
  const { rating, index } = indexRating
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
      {/* //map内型エラー */}
      {rating.map(() => (
        <Grid
          item
          key={rating.account_id}
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
          <Avatar alt={rating.username} src={rating.icon} />

          <Typography>{rating.ratingname}</Typography>
          <Typography color={'#999'}>rating: {rating.rate}</Typography>
        </Grid>
      ))}
    </Card>
  )
}

export default ratingRating
