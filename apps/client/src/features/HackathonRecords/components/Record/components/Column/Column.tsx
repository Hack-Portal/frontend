import { Grid, Typography } from '@mui/material'
import React, { ReactNode } from 'react'

type Props = {
  title: string
  date?: string
  icon: ReactNode
}

export const Column = (props: Props) => {
  const { title, date, icon } = props
  return (
    <Grid
      container
      alignItems={'center'}
      direction={'row'}
      wrap={'nowrap'}
      gap={[0.5, 1.5]}
    >
      {icon}
      <Grid container direction={'column'}>
        <Typography
          color={'#aaa'}
          sx={{ fontSize: ['0.6rem', '0.8rem', '1rem', '1rem', '1.2rem'] }}
          width={"fit-content"}
        >
          {title}
        </Typography>
        <Typography
          textAlign={'center'}
          sx={{
            mt: [0.2, 0.5],
            fontSize: ['0.6rem', '0.8rem', '1rem', '1rem', '1.2rem'],
          }}
          width={"fit-content"}
        >
          {date}
        </Typography>
      </Grid>
    </Grid>
  )
}
