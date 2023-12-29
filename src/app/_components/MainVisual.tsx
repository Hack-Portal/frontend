import Image from 'next/image'
import { Grid, Hidden, Typography } from '@mui/material'

export const MainVisual = () => {
  const TITLE_TEXT_STYLE = {
    fontSize: {
      xs: '1.8rem', // エクストラスモールデバイス
      sm: '2.9rem', // スモールデバイス
      md: '2.5rem', // ミディアムデバイス
      lg: '3rem', // ラージデバイス
      xl: '4rem', // エクストララージデバイス
    },
  }

  const TITLE_STRONG_STYLE = {
    fontSize: {
      xs: '2.1rem',
      sm: '3.2rem',
      md: '2.8rem',
      lg: '3.3rem',
      xl: '4.3rem',
    },
  }

  return (
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
            fontWeight={'bold'}
            color={'#333'}
            sx={{ ...TITLE_TEXT_STYLE, my: 5, width: 'min-content' }}
          >
            <Typography
              component={'span'}
              fontWeight={'bold'}
              color={'#48BBED'}
              sx={{ ...TITLE_STRONG_STYLE }}
            >
              hack
            </Typography>
            ing　
            <Hidden mdDown>
              <br />
            </Hidden>
            <Typography
              component={'span'}
              fontWeight={'bold'}
              color={'#48BBED'}
              sx={{ ...TITLE_STRONG_STYLE }}
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
  )
}
