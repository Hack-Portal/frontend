import React from 'react'
import { Paper, Typography, Box, Button, Link } from '@/lib/mui/muiRendering'
import { MiniCard } from '../types/MiniCard'

type Props = {
  detail: MiniCard
}

export const RightCard = (props: Props) => {
  const { detail } = props
  return (
    <Box
      sx={{
        mt: 10,
        width: '250px',
        right: '50%',
        left: '50%',
        position: 'fixed',
        transform: 'translate(500px, 0)',
      }}
    >
      <Paper elevation={5} sx={{ width: '250px', p: 2 }}>
        <Box>
          <Typography
            variant="h6"
            sx={{
              borderBottom: 2,
              width: '80%',
              fontSize: '22px',
              mt: 1.5,
            }}
          >
            募集締め切り
          </Typography>
          <Typography sx={{ mt: 0.5, fontSize: '20px' }}></Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{
              width: '80%',
              borderBottom: 'double',
              fontSize: '22px',
              mt: 1.5,
            }}
          >
            キックオフ
          </Typography>
          <Typography sx={{ mt: 0.5, fontSize: '20px' }}>
            {detail.start_date}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{
              borderBottom: 'double',
              width: '80%',

              fontSize: '22px',
              mt: 1.5,
            }}
          >
            期間
          </Typography>
          <Typography sx={{ mt: 0.5, fontSize: '20px' }}>
            {detail.term}
          </Typography>
        </Box>
        <Box sx={{ mt: 3 }} textAlign={'center'}>
          <Link href={detail.link}>
            <Button sx={{ margin: 'auto' }}>公式サイトへ</Button>
          </Link>
        </Box>
      </Paper>
    </Box>
  )
}
