import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  Chip,
  Box,
  JoyBadge,
} from '@/lib/mui/muiRendering'

import StarRateIcon from '@mui/icons-material/StarRate'
import {
  Domain_NowRoomAccounts,
  Domain_RoomFramework,
  Domain_RoomTechTags,
} from '@/api/@types'
import { formatDate } from '@/utils/formatDate'
import { Content } from './RoomRecordRightBox/Content'
import { useEffect } from 'react'

type Props = Partial<{
  hackathonName: string
  title: string
  member_limit: number
  expired: string
  now_member: Domain_NowRoomAccounts[]
  techs: Domain_RoomTechTags[]
  frameworks: Domain_RoomFramework[]
}>

export const RoomRecordRightBox = (props: Props) => {
  const {
    title,
    member_limit,
    now_member,
    techs,
    frameworks,
    hackathonName,
    expired,
  } = props



  return (
    <CardContent
      sx={{
        textAlign: 'left',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        ml: 2,
        justifyContent: 'space-between',
        gap: 1,
      }}
    >
      {/* title subtitle */}
      <Grid container direction={'column'}>
        <Typography
          sx={{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontSize: '1.6rem',
            width: '220px',
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
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
      </Grid>
      {/* title subtitle */}

      {/* ribbon */}
      <Box
        sx={{
          position: 'absolute',
          top: '35px',
          right: '-40px',
          transform: 'rotate(45deg)',
          background: '#2A98FD',
          color: '#eee',
          px: 5,
        }}
      >
        <Typography sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
          {formatDate(expired!)}まで
        </Typography>
      </Box>
      {/* ribbon */}

      <Grid container>
        <Content name={'メンバー'}>
          {now_member &&
            Array.from(Array(member_limit)).map((_, index) =>
              now_member[index] ? (
                now_member[index].is_owner ? (
                  <JoyBadge
                    badgeContent={<StarRateIcon sx={{ width: 8, height: 8 }} />}
                    variant="solid"
                    size="sm"
                    badgeInset="10% 20%"
                    key={index}
                    sx={{ mt: 1 }}
                  >
                    <Avatar
                      sx={{ width: 35, height: 35, mr: 0.5 }}
                      src={now_member[index].icon}
                      alt={'user-icon'}
                      variant="rounded"
                    />
                  </JoyBadge>
                ) : (
                  <Avatar
                    sx={{ width: 35, height: 35, mr: 0.5, mt: 1 }}
                    src={now_member[index].icon}
                    alt={'user-icon'}
                    variant="rounded"
                    key={index}
                  />
                )
              ) : (
                <Card
                  sx={{
                    width: 35,
                    height: 35,
                    mr: 0.5,
                    background: '#ddd',
                    mt: 1,
                  }}
                  key={index}
                />
              ),
            )}
        </Content>
        <Content name={'言語'}>
          {techs?.map((tech) => (
            <Avatar
              sx={{ width: 35, height: 35, mr: 0.5 }}
              src={tech.tech_tag?.icon}
              alt={'tech-icon'}
              variant="rounded"
              key={tech.tech_tag?.tech_tag_id}
            />
          ))}
        </Content>
        <Content name={'フレームワーク'}>
          {frameworks?.map((framework) => (
            <Avatar
              sx={{ width: 35, height: 35, mr: 0.5 }}
              src={framework.framework?.icon}
              alt={'tech-icon'}
              variant="rounded"
              key={framework.framework?.framework_id}
            />
          ))}
        </Content>
      </Grid>
    </CardContent>
  )
}
