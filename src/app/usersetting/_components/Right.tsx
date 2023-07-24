import { Grid, Input } from '@mui/joy'
import { Typography, TextField, MenuItem, Button } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import MailIcon from '@mui/icons-material/Mail'

import React from 'react'
export const Right = () => {
  return (
    <Grid
      display={'flex'}
      flexDirection={'column'}
      sx={{ width: '500px', textAlign: 'center', mt: 16 }}
    >
      <Grid display={'row'} sx={{ textAlign: 'center', mb: 2 }}>
        <MailIcon />
        <Typography sx={{ mt: 1 }}>Email</Typography>
        <Input
          sx={{ margin: 'auto', width: '350px', height: '10px' }}
          placeholder="Placeholder"
        />
      </Grid>

      <Grid display={'row'} sx={{ textAlign: 'center', mb: 2 }}>
        <GitHubIcon />
        <Typography sx={{ mt: 1 }}>GitHub URL</Typography>
        <Input
          sx={{ margin: 'auto', width: '350px', height: '10px' }}
          placeholder="Placeholder"
        />
      </Grid>

      <Grid sx={{ mt: 15, mb: 2 }}>
        <Button variant="contained">Update </Button>
      </Grid>
      <Button color="secondary">cancel</Button>
    </Grid>
  )
}
