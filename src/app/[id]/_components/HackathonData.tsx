import React from 'react'
import { Grid, Box, Paper, CardMedia, Typography } from '@/lib/mui/muiRendering'
import { CenterCard } from '../types/CenterCard'

type Props = {
  detail: CenterCard
}

export const HackathonData = (props: Props) => {
  const { detail } = props
  return (
    <>
      <Box sx={{ width: '1000px' }}>
        <Box display={'row'} sx={{ mt: 2 }}>
          <Grid textAlign={'center'}>
            <CardMedia
              component="img"
              image={detail.icon}
              alt="img"
              sx={{
                width: '950px',
                height: '600px',
                objectFit: 'cover',
                m: 'auto',
              }}
              //2016 × 1286
            />
            {/* HackathonName */}
            <Typography component="h6" sx={{ mt: 3, fontSize: 24 }}>
              {detail.name}
            </Typography>
          </Grid>
        </Box>

        <Grid margin={'auto'} sx={{ mt: 2, width: '950px', pb: 5 }}>
          <Paper elevation={5} sx={{ width: '950px', pb: 5 }}>
            <Typography
              sx={{
                m: 'auto',
                width: '900px',
                borderBottom: 'double',
                fontSize: 30,
                mt: 3,
                pt: 2,
              }}
            >
              ハッカソン詳細
            </Typography>
            <Box
              sx={{
                m: 'auto',
                width: '800px',
                fontSize: 20,
                mt: 2,
                pt: 2,
              }}
            >
              <Typography sx={{ fontSize: '16px' }}>
                {detail.description}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Box>
    </>
  )
}
