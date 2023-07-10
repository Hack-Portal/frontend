import { Box, Card, IconButton, Sheet } from '@mui/joy'
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
          <Card
            sx={{
              maxWidth: 800,
              minWidth: 800,
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 200, height: 200, objectFit: 'cover' }}
              image={hackathon.icon}
              alt={hackathon.name}
            />
            <Box sx={{ maxWidth: 550 }}>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {hackathon.name}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography> */}
                <Typography>募集締め切り：{hackathon.expired}</Typography>
                <Typography>キックオフ：{hackathon.start_date}</Typography>
                <Typography>期間：{hackathon.term}日間</Typography>
                <Grid container>
                    {hackathon.hackthon_tag.map((tag,id) => (
                        <Typography key={id}>{tag}</Typography>
                    ))}
                </Grid>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <BookmarkBorderOutlinedIcon />
                </IconButton>
              </CardActions>
            </Box>
          </Card>
        </Link>
      ))}
    </Grid>
  )
}
