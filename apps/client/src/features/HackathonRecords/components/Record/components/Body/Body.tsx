import React from 'react'
import { Box, Card } from '@mui/material'

type Props = {
  href: string
  children: React.ReactNode
}

export const Body = (props: Props) => {
  const { href, children } = props
  return (
    <Box
      sx={{
        width: ['100%', '100%', '100%', '48%'],
      }}
    >
      <a
        href={href}
        style={{ width: '100%' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card
          sx={{
            height: '20vw',
            width: '100%',
            maxHeight: '245px',
            flexWrap: 'nowrap',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            minHeight: '125px',
            py: 2,
            pl: 2,
            pr: 0,
            position: 'relative',
            boxSizing: 'border-box',
            '&:hover': { boxShadow: '0px 0px 2px  1px #1E90FF' },
          }}
        >
          {children}
        </Card>
      </a>
    </Box>
  )
}
