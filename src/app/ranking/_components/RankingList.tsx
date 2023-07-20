import { Box, Card, IconButton, Sheet, Button, Badge } from '@mui/joy'

import {

  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Chip,
} from '@mui/material'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import { CenterArea } from '@/components/layouts/CenterArea'
import { CenterRecordCard } from '@/components/layouts/CenterRecordCard'
import Image from 'next/image'


export const RankingList = () => {
  return (
   <>
    <CardContent sx={{ width: 250 }}>
    <Grid container direction={'column'} sx={{ Width: 450, ml: 2 }}>
      <Typography
        sx={{
          overflow: 'hidden',
          mt: 2,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          fontSize: '23px',
          width: '220px',
        }}
        variant="h5"
      >
ef      </Typography>

      <Typography
        sx={{
          width: '220px',
          mt: 1,
          mb: 1.5,
          fontSize: '16px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
        color={'#999'}
      >
      wqdwq
      </Typography>
      <Typography sx={{ mt: 0.5, fontSize: '14px' }} color={'#999'}>
        募集開始日
      </Typography>
      <Typography sx={{ mt: 1, fontSize: '16px' }}>1月22日(金)</Typography>

      <Grid container direction={'row'} sx={{ mt: 2.5, mb: 1.5 }}>
dwdwdw
      </Grid>
    </Grid>
  </CardContent>

  <CardContent sx={{ width: 350 }}>
    <Box sx={{ height: 30, flexDirection: 'row' }} />
    <Typography sx={{ fontSize: '14px' }} color={'#999'}>
      Techs
    </Typography>
    <Grid container sx={{ width: '250px', mt: 1 }}>
   
        <Grid item>
          <Chip
            label="react"
            sx={{ mt: 0.5, mr: 0.5, fontSize: '14px' }}
           
          />
        </Grid>

    </Grid>
    <Typography sx={{ mt: 1.4, fontSize: '14px' }} color={'#999'}>
      frameworks
    </Typography>
    <Grid container sx={{ width: '300px', mt: 1 }}>
    
        <Grid sx={{ display: 'flex' }} item >
          <Chip
            label="g"
            sx={{ mt: 0.3, mr: 0.5, fontSize: '14px' }}

          />
        </Grid>
  
    </Grid>
  </CardContent>
  </>
  )
}
