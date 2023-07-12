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
          href={`/hackathon/${hackathon.id}`}
          key={hackathon.id}
        >
          <CardMedia
            sx={{ width: 230, height: 230, pt: 2, pl: 2, objectFit: 'cover' }}
            title="Your title"
          >
            <div
              style={{ position: 'relative', width: '100%', height: '100%' }}
            >
              <Image
                src={hackathon.icon}
                alt={hackathon.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </CardMedia>
          <CardContent
            sx={{ width: '300px', display: 'flex', flexDirection: 'column' }}
          >
            <CardContent
              sx={{
                width: '450px',
                maxHeight: '58px',
              }}
            >
              <Typography
                sx={{
                  //省略文字の設定
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  fontSize: '23px',
                }}
                variant="h3"
              >
                {hackathon.name}
              </Typography>
            </CardContent>

            <Grid
              container
              direction={'column'}
              sx={{ display: 'flex', Width: 250, ml: 2 }}
            >
              <Typography sx={{ fontSize: '14px' }} color={'#999'}>
                募集締め切り
              </Typography>
              <Typography sx={{ mt: 0.5, fontSize: '16px' }}>
                {hackathon.expired}
              </Typography>
              <Typography sx={{ mt: 0.5, fontSize: '14px' }} color={'#999'}>
                キックオフ
              </Typography>
              <Typography sx={{ mt: 0.5, fontSize: '16px' }}>
                {hackathon.start_date}
              </Typography>
              <Typography sx={{ mt: 0.5, fontSize: '14px' }} color={'#999'}>
                期間
              </Typography>
              <Typography sx={{ fontSize: '16px' }}>
                {hackathon.term}日間
              </Typography>
            </Grid>
          </CardContent>

          <CardContent sx={{ width: '230px' }}>
            <CardActions sx={{ mt: 1, ml: 22 }} disableSpacing>
              <IconButton aria-label="add to favorites">
                <BookmarkBorderOutlinedIcon
                  sx={{ height: '30px', width: '30px' }}
                />
              </IconButton>
            </CardActions>
            <Grid sx={{ mt: 7 }} container>
              {hackathon.hackthon_tag.map((tag, id) => (
                <Grid item key={id} xs={6}>
                  <Chip
                    label={tag}
                    sx={{ mt: 0.3, mr: 0.5, fontSize: '15px' }}
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
