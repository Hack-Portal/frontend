import { Grid, Typography } from '@mui/material'
import { Contents } from '@/app/_components/About/Contents'

export const About = () => {
  const TITLE_TEXT_STYLE = {
    fontSize: {
      xs: '1.8rem',
      sm: '2.1rem',
      md: '2.5rem',
      lg: '3rem',
      xl: '3rem',
    },
    margin: {
      xs: '75px 0 30px 0',
      sm: '100px 0 30px 0',
      md: '100px 0 30px 0',
      lg: '150px 0 30px 0',
      xl: '200px 0 30px 0',
    },
  }
  const DESCRIPTION_TEXT_STYLE = {
    fontSize: {
      xs: '1rem',
      sm: '1.4rem',
      md: '1.45rem',
      lg: '1.75rem',
      xl: '2rem',
    },
    marginBottom: {
      xs: '75px',
      sm: '100px',
      md: '100px ',
      lg: '150px',
      xl: '200px',
    },
  }

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
    <Grid
      container
      alignItems={'center'}
      direction={'column'}
      sx={{
        px: 5,
        boxShadow: 'none',
      }}
    >
      <Typography
        sx={{
          ...TITLE_TEXT_STYLE,
          fontWeight: 'bold',
          color: '#333',
        }}
      >
        hack hackとは？
      </Typography>
      <Typography
        sx={{
          ...DESCRIPTION_TEXT_STYLE,
          color: '#333',
          textAlign: 'center',
        }}
      >
        hack hackはハッカソンを探しメンバーを募集するためのdiscord
        コミュニティです。
        <br />
      </Typography>
      <Grid container justifyContent={'space-evenly'} gap={10}>
        {CONTENTS.map((content, index) => (
          <Contents
            key={index}
            title={content.title}
            href={content.href}
            src={content.image}
            text={content.text}
          />
        ))}
      </Grid>
    </Grid>
  )
}
