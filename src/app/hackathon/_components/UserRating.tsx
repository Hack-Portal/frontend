import React from 'react'
import { Grid, Avatar, Typography, Card } from '@/lib/mui/muiRendering'
import { FetchRating } from '@/app/hackathon/_services/fetchRating'
import { Domain_AccountRateResponse } from '@/api/@types'

const ratingRating = async () => {
  const fetchRatings = new FetchRating()
  const ratingData = await fetchRatings.fetchRating()

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
      {ratingData.map((data: Domain_AccountRateResponse, index: number) => (
        <Grid
          item
          key={data.account_id}
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
          <Avatar alt={data.username} src={data.icon} />

          <Typography>{data.rate}</Typography>
          <Typography color={'#999'}>rating: {data.rate}</Typography>
        </Grid>
      ))}
    </Card>
  )
}

export default ratingRating