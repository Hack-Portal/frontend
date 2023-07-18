import { Box, Card, IconButton, Sheet, Button, Badge } from '@mui/joy'

import {
  Paper,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Chip,
} from '@mui/material'

import { HackathonThumb } from '../types/hackathon'
import Typography from '@mui/material/Typography'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import { CenterArea } from '@/components/layouts/CenterArea'
import { CenterRecordCard } from '@/components/layouts/CenterRecordCard'
import Image from 'next/image'

type Props = {
  hackathons: HackathonThumb[]
}

export const HackathonList = (props: Props) => {
  const { hackathons } = props
  return (
    <CenterArea>
      {hackathons.map((hackathon) => (
        <CenterRecordCard
          href={`/hackathons?page_size=3&page_id=1${hackathon.hackathon_id}`}
          key={hackathon.hackathon_id}
        >
          <CardMedia
            component={'img'}
            sx={{ width: 218, height: 218, objectFit: 'cover' }}
            title="Your title"
            image={hackathon.icon}

          />

          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              pl: 4,
              minHeight: '218px',
              minWidth: '500px',
              width:"500px",
            }}
          >
            <Typography
              sx={{
                //省略文字の設定
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                fontSize: '23px',
                pb: 2,
              }}
              variant="h3"
            >
              {hackathon.name}
            </Typography>

            <Grid
              container
              direction={'row'}
              sx={{ display: 'flex', maxWidth: 300 }}
              wrap="nowrap"
            >
              <Grid container direction={'column'}>
                <Typography sx={{ fontSize: '14px' }} color={'#999'}>
                  募集締め切り
                </Typography>
                <Typography sx={{ mt: 0.5, fontSize: '16px' }}>
                  {new Date(hackathon.expired).toLocaleDateString()}
                </Typography>
                <Typography sx={{ mt: 0.5, fontSize: '14px' }} color={'#999'}>
                  キックオフ
                </Typography>
                <Typography sx={{ mt: 0.5, fontSize: '16px' }}>
                  {new Date(hackathon.start_date).toLocaleDateString()}
                </Typography>
                <Typography sx={{ mt: 0.5, fontSize: '14px' }} color={'#999'}>
                  期間
                </Typography>
                <Typography sx={{ fontSize: '16px' }}>
                  {hackathon.term}日間
                </Typography>
              </Grid>
              <Grid container direction={'row'} wrap="nowrap">
                {hackathon.HackathonStatusTag.map((tag, id) => (
                  <Grid item key={id}>
                    <Chip
                      label={tag.status}
                      sx={{ mt: 0.5, mr: 0.5, fontSize: '15px' }}
                      key={id}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </CardContent>

          <CardContent sx={{ width: '500px' }}>
            <CardActions
              sx={{ position: 'absolute', right: 20, top: 20 }}
              disableSpacing
            >
              <IconButton aria-label="add to favorites">
                <BookmarkBorderOutlinedIcon
                  sx={{ height: '30px', width: '30px' }}
                />
              </IconButton>
            </CardActions>
            <Grid container>
              {hackathon?.HackathonStatusTag?.map((tag, id) => (
                <Grid item key={id} >
                  <Chip
                    label={tag.status}
                    sx={{ mt: 0.5, mr: 0.5, fontSize: '15px' }}
                    key={id}
                  />
                </Grid>
              ))}
            </Grid>

          </CardContent>
        </CenterRecordCard>
      ))}
    </CenterArea>
  )
}
