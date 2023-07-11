import { Box, Card, IconButton, Sheet, Button } from '@mui/joy'
import {
  Paper,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Chip,
} from '@mui/material'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import { Hackathon } from '../types/hackathon'
import Image from 'next/image'

type Props = {
  hackathons: Hackathon[]
}

export const HackathonList = (props: Props) => {
  const { hackathons } = props
  return (
    <Grid container alignItems={'center'} direction="column" gap={2}>
      {hackathons.map((hackathon) => (
        <Link key={hackathon.id} href={`/hackathon/${hackathon.id}`}>
          <Paper
            elevation={3}
            sx={{
              minHeight: 250,
              maxHeight: 250,
              maxWidth: 800,
              minWidth: 800,
              display: 'flex',
            }}
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

            <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontSize: '30px' }} variant="h5">
                  {hackathon.name}
                </Typography>

                <Typography sx={{ mt: 1, mb: 1.5, fontSize: '16px' }}>
                  募集締め切り：{hackathon.expired}
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize: '16px' }}>
                  キックオフ：{hackathon.start_date}
                </Typography>

                <Typography sx={{ mb: 1.5, fontSize: '16px' }}>
                  期間：{hackathon.term}日間
                </Typography>
              </CardContent>
            </Box>
            <Box>
              <CardActions sx={{ mt: 1, ml: 24 }} disableSpacing>
                <IconButton aria-label="add to favorites">
                  <BookmarkBorderOutlinedIcon
                    sx={{ height: '30px', width: '30px' }}
                  />
                </IconButton>
              </CardActions>
              <Grid sx={{ mt: 12, mr: 8 }} spacing={2} container>
                {hackathon.hackthon_tag.map((tag, id) => (
                  <Grid item key={id} xs={4}>
                    <Chip label={tag} sx={{ fontSize: '15px' }} key={id} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>
        </Link>
      ))}
    </Grid>
  )
}
