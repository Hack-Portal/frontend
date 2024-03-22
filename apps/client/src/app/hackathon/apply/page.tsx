import React from 'react'
import { Grid, TextField, Button, InputLabel, Typography } from '@mui/material'

const page = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      height="59vh"
      direction="column"
      gap={5}
    >
      <Grid item pt={15}>
        <InputLabel
          sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
        >
          <Typography fontWeight={700} fontSize="1.2rem">
            ハッカソンのリンク
          </Typography>
          <TextField
            variant="outlined"
            placeholder="リンクを貼り付け"
            sx={{ width: '80vw', maxWidth: '500px' }}
          />
        </InputLabel>
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
