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
            taku1010101010110101011@
            {/* {data?.email} */}
          </Typography>
        </Grid>
        <Grid sx={{ textAlign: 'left', display: 'flex', mb: 2 }}>
          <TwitterIcon />
          <Typography sx={{ ml: 2, fontSize: '20px' }}>
            taku1010101010110101011@
            {/* {data?.twitter_link} */}
          </Typography>
        </Grid>

        <Grid sx={{ textAlign: 'left', display: 'flex', mb: 2 }}>
          <GitHubIcon />
          <Typography sx={{ ml: 2, fontSize: '20px' }}>
            taku1010101010110101011@
            {/* {data?.github_link} */}
          </Typography>
        </Grid>

        <Grid sx={{ textAlign: 'left', display: 'flex', mb: 2 }}>
          <MailIcon />
          <Typography sx={{ ml: 2, fontSize: '20px' }}>
            taku1010101010110101011@
            {/* {data?.discord_link} */}
          </Typography>
        </Grid>
        <Grid sx={{ textAlign: 'right', mr: 3 }}>
          <Button sx={{ mr: 2 }} variant="contained">
            編集
          </Button>
          <Button variant="contained"> サインアウト</Button>
        </Grid>
      </Grid>
    </>
  )
}

//       <Link href="/usersetting">
{
  /* <Button sx={{ mt: 3 }} variant="contained">
設定画面へ
</Button>
</Link>
<Link>
<Button sx={{ mt: 3 }} variant="contained">
サインアウト
</Button>
</Link> */
}
