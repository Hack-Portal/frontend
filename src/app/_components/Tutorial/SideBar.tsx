// 現状、RSCで対応していない
'use client'
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineItemClasses,
  Typography,
} from '@/lib/mui/muiRendering'
import Image from 'next/image'

type Props = {
  sub: { title: JSX.Element; description: string; image: string }[]
}
export const SideBar = (props: Props) => {
  const { sub } = props

  const DOT_STYLE = {
    width: '2rem',
    height: '2rem',
    m: '0 0 0 0 ',
    bgcolor: 'primary.main',
  }

  const CONNECTOR_STYLE = {
    width: '5px',
    minHeight: '300px',
    bgcolor: 'primary.light',
  }

  const CONTENT_STYLE = {
    ml: 5,
    pt: 0,
    mt: '-9px',
  }

  const DESCRIPTION_STYLE = {
    fontSize: '1.1rem',
    color: '#333',
    fontWeight: 'bold',
    whiteSpace: 'pre-line',
  }

  return (
    <>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {sub.map((item, index) => (
          <TimelineItem key={index + 1}>
            <TimelineSeparator>
              <TimelineDot sx={DOT_STYLE} />
              <TimelineConnector sx={CONNECTOR_STYLE} />
            </TimelineSeparator>
            <TimelineContent sx={CONTENT_STYLE}>
              {item.title}
              <Typography sx={DESCRIPTION_STYLE}>{item.description}</Typography>
              <Image
                src={`/image/${item.image}`}
                width={500}
                height={281.5}
                alt="tutorial movie"
                style={{ marginTop: 15, marginBottom: 15 }}
              />
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  )
}
