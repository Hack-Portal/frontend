import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@/lib/mui/muiRendering'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Linkify from 'linkify-react'

type Props = {
  title: string
  children: React.ReactNode
}

export const CustomAccordion = (props: Props) => {
  const { title, children } = props
  return (
    <Accordion defaultExpanded sx={{ boxShadow: 'none', maxWidth: '300px' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{}} />}
        sx={{
          boxShadow: 'none',
          height: 40,
          fontWeight: 'bold',
          mb: 0,
        }}
      >
        <Typography sx={{ fontSize: '1rem' }}  color={'#777'}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ boxShadow: 'none', pt: 0 }}>
        <Typography
          color={'#333'}
          fontSize={"1.2rem"}
          sx={{
            maxWidth: '320px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {children}
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}
