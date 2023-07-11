import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material'
import { RoomUserThumb } from '../types/user'
import { FrameWork } from '@/types/framework'
import { Tech } from '@/types/tech'
import { Badge } from '@mui/joy'
import StarRateIcon from '@mui/icons-material/StarRate'

type Props = {
  hackathonName: string
  title: string
  member_limit: number
  now_member: RoomUserThumb[]
  techs: Tech[]
  frameworks: FrameWork[]
}

export const RoomRecordRightBox = (props: Props) => {
  const { title, member_limit, now_member, techs, frameworks, hackathonName } =
    props
  return (
    <CardContent>
      <Grid container direction={'column'} sx={{ maxWidth: 550, ml: 2 }}>
        <Typography sx={{ fontSize: '25px' }} variant="h5">
          {title}
        </Typography>
        <Typography sx={{ mt: 1, mb: 1.5, fontSize: '16px' }} color={'#999'}>
          {hackathonName}
        </Typography>

        <Grid container direction={'row'} sx={{ mt: 1, mb: 1.5 }}>
          {techs.map((tech, id) => (
            <Typography sx={{ fontSize: '16px', mr: 1 }} key={id}>
              {tech.name}
            </Typography>
          ))}
          {frameworks.map((framework, id) => (
            <Typography sx={{ fontSize: '16px', mr: 1 }} key={id}>
              {framework.name}
            </Typography>
          ))}
        </Grid>
        <Grid container direction={'row'} sx={{ mt: 1, mb: 1.5 }}>
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
                    sx={{ width: 30, height: 30, mr: 1 }}
                    src={now_member[index].icon}
                    alt={'user-icon'}
                    variant="rounded"
                  />
                </Badge>
              ) : (
                <Avatar
                  sx={{ width: 30, height: 30, mr: 1 }}
                  src={now_member[index].icon}
                  alt={'user-icon'}
                  variant="rounded"
                  key={index}
                />
              )
            ) : (
              <Card
                sx={{ width: 30, height: 30, mr: 1, background: '#ddd' }}
              ></Card>
            ),
          )}
        </Grid>
      </Grid>
    </CardContent>
  )
}
