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
import TwitterIcon from '@mui/icons-material/Twitter'

type Props = {
  data?: Domain_AccountResponses | null
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
        <Typography>メールアドレス</Typography>
        <Typography sx={{ mt: 0.5, fontSize: '20px' }}>
          {data?.email}
        </Typography>
      </Grid>
      <Grid sx={{ textAlign: 'center', mb: 2 }}>
        <TwitterIcon />
        <Typography>X</Typography>
        <Typography sx={{ mt: 0.5, fontSize: '20px' }}>
          {data?.twitter_link}
        </Typography>
      </Grid>

      <Grid sx={{ textAlign: 'center', mb: 2 }}>
        <GitHubIcon />
        <Typography>GitHub</Typography>
        <Typography sx={{ mt: 0.5, fontSize: '20px' }}>
          {data?.github_link}
        </Typography>
      </Grid>

      <Grid sx={{ textAlign: 'center', mb: 2 }}>
        <MailIcon />
        <Typography>Discord</Typography>
        <Typography sx={{ mt: 0.5, fontSize: '20px' }}>
          {data?.discord_link}
        </Typography>
      </Grid>

      <Link href="/usersetting">
        <Button sx={{ mt: 3 }} variant="contained">
          設定画面へ
        </Button>
      </Link>
    </Grid>
  )
}
