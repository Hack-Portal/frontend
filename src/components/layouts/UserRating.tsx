import React from 'react'
import { Grid, Avatar, Typography, Card, Box } from '@/lib/mui/muiRendering'
import Link from 'next/link'

export const dynamic = 'force-static'

export const UserRating = async () => {
  const COLUMNS = [
    { title: 'ハッカソンとは', createdAt: '2023-09-01', link: '' },
    { title: 'おすすめ素材', createdAt: '2023-09-01', link: '' },
  ]
  const NEWSES = [
    { title: 'リリースのお知らせ', createdAt: '2023-09-01', link: '' },
  ]

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        px: 2.5,
        pt: 3,
        height: '100%',
      }}
    >
      <Typography fontSize={'1rem'} fontWeight={'bold'}>
        コラム
      </Typography>
      {COLUMNS.map((column, index: number) => (
        <Link href={column.link} key={index + 1}>
          <Box
            sx={{
              py: 1.5,
              display: 'flex',
              flexDirection: 'column',
              borderBottom: '1px solid #ddd',
            }}
          >
            <Typography fontSize={'0.9rem'}>{column.title}</Typography>
            <Typography color={'#999'} fontSize={'0.9rem'}>
              {column.createdAt}
            </Typography>
          </Box>
        </Link>
      ))}
      <Typography sx={{ mt: 3 }} fontSize={'1rem'} fontWeight={'bold'}>
        お知らせ
      </Typography>
      {NEWSES.map((news, index: number) => (
        <Link href={news.link} key={index + 1}>
          <Box
            sx={{
              py: 1.5,
              display: 'flex',
              flexDirection: 'column',
              borderBottom: '1px solid #ddd',
            }}
          >
            <Typography fontSize={'0.9rem'}>{news.title}</Typography>
            <Typography color={'#999'} fontSize={'0.9rem'}>
              {news.createdAt}
            </Typography>
          </Box>
        </Link>
      ))}
    </Card>
  )
}
