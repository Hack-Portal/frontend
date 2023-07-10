import { Box, Card, IconButton, Sheet, Button } from '@mui/joy'
import { Paper } from '@mui/material'
import { Hackathon } from '../types/hackathon'
import { CardActions, CardContent, CardMedia, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'

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
              flexDirection: 'row',
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: 230,
                height: 230,
                pt: 2,
                pl: 2,
                objectFit: 'cover',
              }}
              image={hackathon.icon}
              alt={hackathon.name}
            />
            <Box sx={{ maxWidth: 550, ml: 2 }}>
              <CardContent>
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
                <Grid container>
                  {hackathon.hackthon_tag.map((tag, id) => (
                    <Button sx={{ pt: 1, fontSize: '15px' }} key={id}>
                      {tag}
                    </Button>
                  ))}
                </Grid>

                <CardActions sx={{ mt: 4, ml: 55 }} disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <BookmarkBorderOutlinedIcon
                      sx={{ height: '35px', width: '35px' }}
                    />
                  </IconButton>
                </CardActions>
              </CardContent>
            </Box>
          </Paper>
        </Link>
      ))}
    </Grid>
  )
}
