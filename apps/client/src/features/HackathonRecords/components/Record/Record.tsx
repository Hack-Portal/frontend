import React from 'react'
import { CardContent, Typography, Grid, Chip } from '@mui/material'
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined'
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined'
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined'
import { HackathonRecord } from '../../types/Hackathon'
import * as RecordContainer from './components/index'
import Image from 'next/image'

type Props = HackathonRecord

export const Record = (props: Props) => {
  const { link, icon, name, term, status_tags, expired, start_date } = props

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
    <RecordContainer.Body href={link ? link : ''}>
      <Image
        src={icon ? icon : '/image/hackathon-icon.png'}
        style={{
          width: '15vw',
          height: '15vw',
          maxHeight: 216,
          maxWidth: 216,
          minWidth: 90,
          minHeight: 90,
          objectFit: 'cover',
        }}
        alt={'hackathon icon'}
        sizes="100vw"
        width={200}
        height={200}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          pl: [2, 4, 4, 4, 4],
          maxHeight: '218px',
          maxWidth: ['74%', '84%', '84%', '66%', '66%'],
          width: '100%',
          justifyContent: 'space-evenly',
        }}
      >
        <Typography
          sx={{
            //省略文字の設定
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontSize: ['0.7rem', '1rem', '1.3rem', '1.4rem', '1.5rem'],
            fontWeight: 'bold',
            pb: [1, 1, 2, 2, 2],
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
          width={'100%'}
        >
          {columns.map((column, id) => (
            <RecordContainer.Column
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
            pt: [1, 1, 2, 2, 2],
          }}
        >
          {status_tags?.map((tag, id) => (
            <Grid item key={id}>
              <Chip
                label={tag.status}
                sx={{
                  mt: 0.5,
                  mr: 0.5,
                  fontSize: ['0.4rem', '0.7rem', '0.7rem', '0.7rem', '1rem'],
                  height: ['1.1rem', '1.5rem'],
                }}
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
    </RecordContainer.Body>
  )
}

const ICON_STYLE = {
  color: '#aaa',
  width: '2vw',
  height: '2vw',
  maxHeight: 35,
  maxWidth: 35,
  minWidth: 18,
  minHeight: 18,
  display: ['none', 'block'],
}
