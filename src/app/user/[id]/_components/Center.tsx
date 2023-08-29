import { Typography, Grid } from '@/lib/mui/muiRendering'
import React from 'react'
export const Center = () => {
  return (
    <Grid
      display={'row'}
      sx={{ width: '600px', textAlign: 'center', mr: 1, ml: 1, mt: 10 }}
    >
      <Typography sx={{ mb: 3, fontSize: '20px' }}>過去作</Typography>

      <Grid
        display={'row'}
        sx={{
          margin: 'auto',
          height: '700px',
          overflow: 'auto',
          width: '500px',
          mt: 5,
          backgroundColor: '#eee',
          border: '1px solid #ddd',
        }}
      >
        <Typography sx={{ mt: 2, fontSize: '20px' }}>作品情報</Typography>
      </Grid>
    </Grid>
  )
}
