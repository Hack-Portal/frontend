'use client'
import {
  Typography,
  TextField,
  MenuItem,
  Button,
  Grid,
  Link,
} from '@/lib/mui/muiRendering'
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import MailIcon from '@mui/icons-material/Mail'

type Props = {
  data: Domain_AccountResponses
}

import React from 'react'
import { RightCard } from './types/RightCard'
import { Domain_AccountResponses } from '@/api/@types'
export const Reight = (props: Props) => {
  const { data } = props
  return (
    <Grid
      display={'row'}
      sx={{ width: '400px', textAlign: 'center', mr: 1, ml: 1, mt: 16 }}
    >
      <Grid sx={{ textAlign: 'center', mb: 2 }}>
        <MailIcon />
        <Typography>Email</Typography>
        <Typography sx={{ mt: 0.5, fontSize: '20px' }}>{data.email}</Typography>
      </Grid>

      {/* <Grid display={'row'} sx={{ textAlign: 'center', mb: 2 }}>
        <GitHubIcon />
        <Typography>GitHub URL</Typography>
        <Typography sx={{ fontSize: '20px', mt: 0.5 }}>GitHubUser</Typography>
      </Grid> */}

      <Link href="/usersetting">
        <Button sx={{ mt: 3 }} variant="contained">
          Setting
        </Button>
      </Link>
    </Grid>
  )
}
