import { Box } from '@mui/system'
import { Grid, Avatar, Typography, CardMedia } from '@mui/material'
import React from 'react'

interface StackImage {
  id: string
  label: string
  name: string
  icon: string
}

interface Props {
  stackImages: StackImage[]
}

const RightSideBar: React.FC<Props> = ({ stackImages }) => {
  return (
    <>
      <Box sx={{ mt: 5 }} />
      <Typography sx={{ fontSize: '25px', textAlign: 'center' }}>
        UseStacks
      </Typography>
      <Grid
        container
        direction="column"
        sx={{
          mt: 1,
          width: '45vh',
        }}
      >
        {stackImages.map((image) => (
          <Grid
            item
            key={image.id}
            sx={{
              mt: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ mt: 0.5, mb: 1 }} color={'#999'}>
              {image.label}
            </Typography>
            <Box sx={{ width: '90px' }}>
              <CardMedia
                component="img"
                sx={{
                  mb: 1,
                  width: '100%',
                  height: '100%',
                  borderRadius: '10%',
                }}
                alt={image.name}
                src={image.icon}
              />
            </Box>

            <Typography sx={{ mt: 0.5 }}>{image.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default RightSideBar
