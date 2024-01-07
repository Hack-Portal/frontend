import { CardContent, CardMedia, Grid, Chip, Typography } from '@mui/material'

import { CenterArea } from '@/components/layouts/CenterArea'
import { CenterRecordCard } from '@/components/layouts/CenterRecordCard'
import { HacakathonColumn } from './HacakathonColumn'
import { Response_GetHackathon } from '@/api/@types'
import { formatDate } from '@/utils/formatDate'
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined'
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined'
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined'
type Props = {
  hackathons: Response_GetHackathon[]
}

export const HackathonList = (props: Props) => {
  const { hackathons } = props
  const COLUMN = {
    expired: {
      label: '募集締め切り',
    },
    start_date: {
      label: 'キックオフ',
    },
    term: {
      label: '期間',
    },
  }

  return (
    <CenterArea>
      {hackathons.map((hackathon) => (
        <CenterRecordCard
          href={hackathon.link ? hackathon.link : ''}
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
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              sx={{
                //省略文字の設定
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                fontSize: '1.6rem',
                fontWeight: 'bold',
                pb: 2,
              }}
              variant="h3"
            >
              {hackathon.name}
            </Typography>
            <Grid
              container
              direction={'row'}
              flexWrap={'nowrap'}
              alignItems={'center'}
              gap={3}
              width={'100%'}
            >
              <HacakathonColumn
                title={COLUMN.expired.label}
                value={formatDate(hackathon.expired!)}
                icon={
                  <SensorDoorOutlinedIcon
                    sx={{ color: '#aaa', width: '30px', height: '30px' }}
                  />
                }
              />
              <HacakathonColumn
                title={COLUMN.start_date.label}
                value={formatDate(hackathon.start_date!)}
                icon={
                  <FlagOutlinedIcon
                    sx={{
                      color: '#aaa',
                      width: '30px',
                      height: '30px',
                    }}
                  />
                }
              />
              <HacakathonColumn
                title={COLUMN.term.label}
                value={`${hackathon.term}日間`}
                icon={
                  <HourglassEmptyOutlinedIcon
                    sx={{
                      color: '#aaa',
                      width: '30px',
                      height: '30px',
                    }}
                  />
                }
              />
            </Grid>
            <Grid
              container
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                // width: '300px',
                flexWrap: 'wrap',
                pt: 2,
                gap: 1,
              }}
            >
              {hackathon?.status_tags?.map((tag, id) => (
                <Grid item key={id}>
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
