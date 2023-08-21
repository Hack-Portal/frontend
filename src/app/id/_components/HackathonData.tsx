import React from 'react'
import { Grid, Box, Paper, CardMedia, Typography } from '@/lib/mui/muiRendering'
import { CenterCard } from '../types/CenterCard'

type Props = {
  detail: CenterCard
}

export const HackathonData = (props: Props) => {
  const { detail } = props
  return (
    <Grid container direction={'column'} alignItems={'center'} width={'100%'}>
      <CardMedia
        component="img"
        image={detail.icon}
        alt="img"
        sx={{
          width: '950px',
          height: '500px',
          objectFit: 'cover',
        }}
        //2016 × 1286
      />
      {/* HackathonName */}
      <Grid
        width={'100vw'}
        sx={{ background: '#fff', p: 5 }}
        container
        alignItems={'center'}
        direction={'column'}
      >
        <Grid width={'950px'}>
          <Typography sx={{ fontSize: "2rem", fontWeight: 'bold', mb: 5 }}>
            {detail.name}
          </Typography>
          <Typography
            sx={{
              m: 'auto',
              borderBottom: 'double',
              fontSize: '1.7rem',
              my: 2,
            }}
          >
            ハッカソン詳細
          </Typography>

          <Typography sx={{ fontSize: '1.3rem' }}>
            {detail.description}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
