import React from 'react'
import { Grid, TextField, Button } from '@mui/material'

const page = () => {
  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems={'center'}
      height={'59vh'}
      direction={'column'}
      gap={3}
    >
      <Grid item pt={15}>
        <TextField
          variant="outlined"
          placeholder="ハッカソンのリンクを入力"
          sx={{ width: '80vw' }}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary">
          申請する
        </Button>
      </Grid>
    </Grid>
  )
}

export default page
