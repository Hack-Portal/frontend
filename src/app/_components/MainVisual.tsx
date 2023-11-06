import Image from 'next/image'
import { Card, CardContent, Grid, Typography } from '@mui/material'

export const MainVisual = () => {
  return (
    <Card
      sx={{
        display: 'flex',
        p: 5,
        gap: 5,
        borderRadius: '0px',
        boxShadow: 'none',
        mb: 5,
      }}
    >
      <CardContent
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 0,
          flexDirection: 'column',
        }}
      >
        <Grid container direction="column" gap={3} sx={{ width: 'auto' }}>
          <Typography
            fontSize={'3.75rem'}
            fontWeight={'bold'}
            color={'#333'}
            mb={5}
          >
            ハッカソンを
            <br />
            hackする。
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
      </CardContent>
      <Image
        src="/image/mainVisual.png"
        width={750}
        height={633}
        alt="mainVisual"
        style={{
          objectFit: 'cover',
          borderRadius: '20px 0 0  20px',
        }}
      />
    </Card>
  )
}
