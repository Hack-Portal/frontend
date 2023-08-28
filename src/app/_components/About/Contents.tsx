import {
  Card,
  Grid,
  CardMedia,
  CardContent,
  Typography,
} from '@/lib/mui/muiRendering'
import React from 'react'

export const Contents = () => {
  const CONTENTS = [
    {
      title: 'ハッカソンを探す',
      text: '自分に合ったハッカソンを見つけよう',
      image: '/image/searchPeople.svg',
    },
    {
      title: '仲間を見つける',
      text: '仲間を集めて、ハッカソンに挑戦しよう',
      image: '/image/member.svg',
    },
    {
      title: 'ハッカソンを攻略する',
      text: 'Tipsを参考に、ハッカソンを攻略しよう',
      image: '/image/cheat.svg',
    },
  ]
  return (
    <Grid container justifyContent={'center'} gap={10}>
      {CONTENTS.map((content) => (
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '330px',
          }}
          key={content.title}
        >
          <CardMedia
            src={content.image}
            component="img"
            sx={{
              width: '330px',
              height: '270px',
              objectFit: 'cover',
              px: 3,
            }}
          />
          <CardContent>
            <Typography
              fontSize={'1.5rem'}
              fontWeight={'bold'}
              color={'#333'}
              mb={1}
            >
              {content.title}
            </Typography>
            <Typography>{content.text}</Typography>
          </CardContent>
        </Card>
      ))}
    </Grid>
  )
}
