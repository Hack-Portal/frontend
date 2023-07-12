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
  const { title,children  } = props
  return (
    <Accordion defaultExpanded sx={{ boxShadow: 'none'}}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ boxShadow: 'none' }}>
        <Typography fontSize={"1.2rem"}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ boxShadow: 'none' }}>
        {children}
      </AccordionDetails>
    </Accordion>
  )
}
