import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  Chip,
  Box,
} from '@mui/material'
import { RoomUserThumb } from '../types/user'
import { Framework } from '@/types/framework'
import { Tech } from '@/types/tech'
import { Badge } from '@mui/joy'
import StarRateIcon from '@mui/icons-material/StarRate'

type Props = {
  hackathonName: string
  title: string
  member_limit: number
  now_member: RoomUserThumb[]
  techs: Tech[]
  frameworks: Framework[]
}

export const RoomRecordRightBox = (props: Props) => {
  const { title, member_limit, now_member, techs, frameworks, hackathonName } =
    props
  return (
    <>
      <CardContent sx={{ textAlign: 'left', width: 250 }}>
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
            {title}
          </Typography>

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
            {hackathonName}
          </Typography>
          <Typography sx={{ mt: 0.5, fontSize: '14px' }} color={'#999'}>
            募集開始日
          </Typography>
          <Typography sx={{ mt: 1, fontSize: '16px' }}>1月22日(金)</Typography>

          <Grid container direction={'row'} sx={{ mt: 2.5, mb: 1.5 }}>
            {Array.from(Array(member_limit)).map((_, index) =>
              now_member[index] ? (
                now_member[index].isOwner ? (
                  <Badge
                    badgeContent={<StarRateIcon sx={{ width: 8, height: 8 }} />}
                    variant="solid"
                    size="sm"
                    badgeInset="10% 20%"
                    key={index}
                  >
                    <Avatar
                      sx={{ width: 35, height: 35, mr: 0.5 }}
                      src={now_member[index].icon}
                      alt={'user-icon'}
                      variant="rounded"
                    />
                  </Badge>
                ) : (
                  <Avatar
                    sx={{ width: 35, height: 35, mr: 0.5 }}
                    src={now_member[index].icon}
                    alt={'user-icon'}
                    variant="rounded"
                    key={index}
                  />
                )
              ) : (
                <Card
                  sx={{ width: 35, height: 35, mr: 0.5, background: '#ddd' }}
                  key={index}
                ></Card>
              ),
            )}
          </Grid>
        </Grid>
      </CardContent>

      <CardContent sx={{ width: 350 }}>
        <Box sx={{ height: 30, flexDirection: 'row' }} />
        <Typography sx={{ fontSize: '14px', textAlign: 'left' }} color={'#999'}>
          Techs
        </Typography>
        <Grid container sx={{ width: '250px', mt: 1 }}>
          {techs.map((tech, id) => (
            <Grid item key={id}>
              <Chip
                label={tech.language}
                sx={{ mt: 0.5, mr: 0.5, fontSize: '14px' }}
                key={id}
              />
            </Grid>
          ))}
        </Grid>
        <Typography
          sx={{ mt: 1.4, fontSize: '14px', textAlign: 'left' }}
          color={'#999'}
        >
          frameworks
        </Typography>
        <Grid container sx={{ width: '300px', mt: 1 }}>
          {frameworks.map((framework, id) => (
            <Grid sx={{ display: 'flex' }} item key={id}>
              <Chip
                label={framework.framework}
                sx={{ mt: 0.3, mr: 0.5, fontSize: '14px' }}
                key={id}
              />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </>
  )
}
