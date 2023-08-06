import {
  Grid,
  Avatar,
  Typography,
  CardMedia,
  Box,
} from '@/lib/mui/muiRendering'
import React from 'react'
import { TechStack } from '@/types/techStack'

interface Props {
  techStacks: TechStack[]
}

const StackList = (props: Props) => {
  const { techStacks } = props
  return (
    <Grid container direction={'column'} alignItems={'center'}>
      <Typography>UseStacks</Typography>
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
    </Grid>
  )
}

export default StackList
