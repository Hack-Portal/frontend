import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material'
import Link from 'next/link'

export const Contents = () => {
  const CONTENTS = [
    {
      title: 'ハッカソンを探す',
      text: '自分に合ったハッカソンを見つけよう',
      image: '/image/searchPeople.svg',
      href: '/hackathon',
    },
    {
      title: '仲間を見つける',
      text: '仲間を集めて、ハッカソンに挑戦しよう',
      image: '/image/member.svg',
      href: 'https://discord.gg/wsrNZUWUR6',
    },
  ]
  return (
    <Grid container justifyContent={'space-evenly'} gap={10}>
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
          <Link href={content.href} passHref={true}>
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
          </Link>
        </Card>
      ))}
    </Grid>
  )
}
