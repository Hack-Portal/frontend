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
import React from 'react'
import { Domain_AccountResponses } from '@/api/@types'
type Props = {
  data?: Domain_AccountResponses | null
  signout: () => void
}

export const Reight = (props: Props) => {
  const { data, signout } = props
  return (
    <>
      <Typography
        sx={{
          textAlign: 'left',
          width: '750px',
          margin: 'auto',
          mb: 2,

          fontSize: '25px',
          borderBottom: '2px solid #ccc',
          mt: 5,
        }}
      >
        各種情報
      </Typography>
      <Grid sx={{ mt: 2, ml: 10 }}>
        <Grid sx={{ textAlign: 'left', display: 'flex', mb: 2 }}>
          <MailIcon />
          <Typography sx={{ ml: 2, fontSize: '20px' }}>
            {data?.email ? data?.email : '未設定'}
          </Typography>
        </Grid>
        <Grid sx={{ textAlign: 'left', display: 'flex', mb: 2 }}>
          <TwitterIcon />
          <Typography sx={{ ml: 2, fontSize: '20px' }}>
            {data?.twitter_link ? data?.twitter_link : '未設定'}
          </Typography>
        </Grid>

        <Grid sx={{ textAlign: 'left', display: 'flex', mb: 2 }}>
          <GitHubIcon />
          <Typography sx={{ ml: 2, fontSize: '20px' }}>
            {data?.github_link ? data?.github_link : '未設定'}
          </Typography>
        </Grid>

        <Grid sx={{ textAlign: 'left', display: 'flex', mb: 2 }}>
          <MailIcon />
          <Typography sx={{ ml: 2, fontSize: '20px' }}>
            {data?.discord_link ? data?.discord_link : '未設定'}
          </Typography>
        </Grid>
        <Grid sx={{ textAlign: 'right', mr: 3 }}>
          <Link onClick={signout} href={'/signin'}>
            <Button variant="contained"> サインアウト</Button>
          </Link>
        </Grid>
      </Grid>
    </>
  )
}
