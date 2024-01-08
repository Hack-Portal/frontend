import { Grid, Typography, CardMedia, Box, Card } from '@mui/material'
import React from 'react'

interface Props {
  techStacks: any[]
}

const StackList = (props: Props) => {
  const { techStacks } = props
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 3,
        width: '15vw',
        height: '100%',
      }}
    >
      <Typography>技術スタック</Typography>
      {techStacks.map((techStack) => (
        <Grid
          item
          key={techStack.id}
          sx={{
            mt: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Typography sx={{ mb: 2 }} color={'#999'}>
            {techStack.label}
          </Typography>
          <Box>
            <CardMedia
              component="img"
              sx={{
                mb: 1,
                width: '40px',
                height: '40px',
                borderRadius: '10%',
              }}
              alt={techStack.name}
              src={techStack.icon}
            />
          </Box>

          <Typography sx={{ mt: 0.5 }}>{techStack.name}</Typography>
        </Grid>
      ))}
    </Card>
  )
}

export default StackList
