import { CenterRecordCard } from '@/components/layouts/CenterRecordCard'
import { HackathonRecord } from '@/app/hackathon/_types/Hackathon'
import { CardMedia, CardContent, Typography, Grid, Chip } from '@mui/material'
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined'
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined'
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined'
import * as RecordFC from '@/app/hackathon/_components/'

type Props = HackathonRecord

export const Record = (props: Props) => {
  const { link, icon, name, term, status_tags, expired, start_date } = props
  const ICON_STYLE = {
    color: '#aaa',
    width: '30px',
    height: '30px',
  }
  const columns = [
    {
      icon: <SensorDoorOutlinedIcon sx={ICON_STYLE} />,
      ...expired,
    },
    { icon: <FlagOutlinedIcon sx={ICON_STYLE} />, ...start_date },
    {
      icon: <HourglassEmptyOutlinedIcon sx={ICON_STYLE} />,
      ...term,
    },
  ]
  return (
    <CenterRecordCard href={link ? link : ''}>
      <CardMedia
        component={'img'}
        sx={{ width: 218, height: 218, objectFit: 'cover' }}
        title="Your title"
        image={icon}
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
          {name}
        </Typography>
        <Grid
          container
          direction={'row'}
          flexWrap={'nowrap'}
          alignItems={'center'}
          gap={3}
          width={'100%'}
        >
          {columns.map((column, id) => (
            <RecordFC.Column
              title={column.title}
              date={column.date}
              icon={column.icon}
              key={id}
            />
          ))}
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
          {status_tags?.map((tag, id) => (
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

      {/* <CardContent sx={{ width: '500px' }}> */}
      {/* <CardActions
              sx={{ position: 'absolute', right: 20, top: 20 }}
              disableSpacing
            >
              <IconButton aria-label="add to favorites">
                <BookmarkBorderOutlinedIcon
                  sx={{ height: '30px', width: '30px' }}
                />
              </IconButton>
            </CardActions> */}
      {/* </CardContent> */}
    </CenterRecordCard>
  )
}
