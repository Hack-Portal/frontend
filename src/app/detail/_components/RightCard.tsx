import React from 'react'
import { Box, Button } from '@mui/joy'
import { Paper, Typography } from '@mui/material'
export const RightCard = () => {
  return (
    <Box sx={{ mt: 20, width: '250px' }}>
      <Paper elevation={3} sx={{ width: '250px', p: 2 }}>
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
          <Typography sx={{ mt: 0.5, fontSize: '20px' }}>
            7月11日(月)
          </Typography>
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
            7月31日(月)
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
          <Typography sx={{ mt: 0.5, fontSize: '20px' }}>二日間</Typography>
        </Box>
        <Box sx={{ mt: 3 }} textAlign={'center'}>
          <Button sx={{ margin: 'auto' }}>公式サイトへ</Button>
        </Box>
      </Paper>
    </Box>
  )
}
