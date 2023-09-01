import React from 'react'
import { Grid, Avatar, Typography, Card, Box } from '@/lib/mui/muiRendering'
import { FetchRating } from '@/app/hackathon/_services/fetchRating'
import { Domain_AccountRateResponse } from '@/api/@types'
import Link from 'next/link'

export const dynamic = 'force-static'

export const UserRating = async () => {
  const fetchRatings = new FetchRating()
  const rating = await fetchRatings.fetchRating()
  const COLUMNS = [
    { title: 'ハッカソンとは', createdAt: '2023-09-01', link: '' },
    { title: 'おすすめ素材', createdAt: '2023-09-01', link: '' },
  ]
  const NEWSES = [
    { title: 'ベータリリースのお知らせ', createdAt: '2023-09-01', link: '' },
  ]

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        px:5,
        pt: 3,
        width: '15vw',
        height: '100%',
      }}
    >
      <Typography>お知らせ</Typography>
      {COLUMNS.map((column, index: number) => (
        <Link href={column.link} 
        key={index + 1}>
        <Box
          sx={{
            mt: 3,
            display: 'flex',
            flexDirection: 'column',
            borderBottom: '1px solid #ddd',
          }}
        >
          <Typography>{column.title}</Typography>
          <Typography color={'#999'}>{column.createdAt}</Typography>
        </Box>
        </Link>
      ))} 
    </Card>
  )
}
