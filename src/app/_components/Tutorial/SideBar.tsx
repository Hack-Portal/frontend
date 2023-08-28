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
  sub: { title: JSX.Element; description: string }[]
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
    mt: "-9px"
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
          <TimelineItem key={index + 1} >
            <TimelineSeparator>
              <TimelineDot sx={DOT_STYLE} />
              <TimelineConnector sx={CONNECTOR_STYLE} />
            </TimelineSeparator>
            <TimelineContent sx={CONTENT_STYLE}>
              {item.title}
              <Typography sx={DESCRIPTION_STYLE}>{item.description}</Typography>
              <Image src={"/image/cheat.svg"} width={600} height={600} alt="tutorial movie" style={{}}/>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  )
}
