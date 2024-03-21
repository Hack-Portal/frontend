import React from 'react'
import Image from 'next/image'
import { Grid, Hidden, Typography, Box } from '@mui/material'
import { CONTENTS } from '@/features/HackPortalContent/constants/CONTENT'
import { Content } from '@/features/HackPortalContent/components/Content'

const Home = () => {
  return (
    <Box sx={{ background: '#fefefe' }}>
      <Grid
        container
        gap={5}
        sx={{
          p: 5,
          pb: 0,
          width: '100%',
        }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} md={5.5}>
          <Image
            src="/image/hack_hack_logo.svg"
            width={750}
            height={633}
            alt="mainVisual"
            style={{
              borderRadius: '0 20px 20px 0',
              width: '100%',
              height: 'auto',
            }}
            sizes="100vw"
          />
        </Grid>

        <Grid item xs={12} md={5.5}>
          <Grid
            container
            direction="column"
            alignItems="center"
            // gap={3}
          >
            <Typography
              fontWeight="bold"
              color="#333"
              sx={{ ...responsive.title_text, my: 5, width: 'min-content' }}
            >
              <Typography
                component="span"
                fontWeight="bold"
                color="#48BBED"
                sx={{ ...responsive.title_strong }}
              >
                hack
              </Typography>
              ing　
              <Hidden mdDown>
                <br />
              </Hidden>
              <Typography
                component="span"
                fontWeight="bold"
                color="#48BBED"
                sx={{ ...responsive.title_strong }}
              >
                hack
              </Typography>
              athon！
            </Typography>

            {/* <Link href="/signin">
            <Button
              sx={{
                width: '300px',
                height: '60px',
                borderRadius: '50px',
                fontSize: '1.3rem',
                fontWeight: 'bold',
                backgroundColor: '#2A98FD',
                color: '#eee',
                '&:hover': {
                  color: '#2A98FD',
                },
              }}
            >
              ログイン
            </Button>
          </Link>
          <Button
            sx={{
              width: '300px',
              height: '60px',
              borderRadius: '50px',
              fontSize: '1.3rem',
              fontWeight: 'bold',
              backgroundColor: '#333',
              color: '#eee',
              '&:hover': {
                color: '#333',
              },
            }}
          >
            新規登録
          </Button> */}
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        direction="column"
        sx={{
          px: 5,
          boxShadow: 'none',
        }}
      >
        <Typography
          sx={{
            ...responsive.desc_title_text,
            fontWeight: 'bold',
            color: '#333',
          }}
        >
          hack hackとは？
        </Typography>
        <Typography
          sx={{
            ...responsive.desc_text,
            color: '#333',
            textAlign: 'center',
          }}
        >
          hack hackはハッカソンを探しメンバーを募集するためのdiscord
          コミュニティです。
          <br />
        </Typography>
        <Grid container justifyContent="space-evenly" gap={10}>
          {CONTENTS.map((content) => (
            <Content
              key={content.title}
              title={content.title}
              href={content.href}
              src={content.image}
              text={content.text}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}

const responsive = {
  title_text: {
    fontSize: {
      xs: '1.8rem', // エクストラスモールデバイス
      sm: '2.9rem', // スモールデバイス
      md: '2.5rem', // ミディアムデバイス
      lg: '3rem', // ラージデバイス
      xl: '4rem', // エクストララージデバイス
    },
  },
  title_strong: {
    fontSize: {
      xs: '2.1rem',
      sm: '3.2rem',
      md: '2.8rem',
      lg: '3.3rem',
      xl: '4.3rem',
    },
  },
  desc_title_text: {
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
  },
  desc_text: {
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
  },
}

export default Home
