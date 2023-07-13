import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

type Props = {
  title: string
  children: React.ReactNode
}
export const CustomAccordion = (props: Props) => {
  const { title, children } = props
  return (
    <Accordion defaultExpanded sx={{ boxShadow: 'none' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          boxShadow: 'none',
          height: 40,
          fontWeight: 'bold',
          mb: 0,
        }}
      >
        <Typography sx={{ fontSize: '1.1rem' }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ boxShadow: 'none', pt: 0 }}>
        <Typography color={'#777'}>{children}</Typography>
      </AccordionDetails>
    </Accordion>
  )
}
