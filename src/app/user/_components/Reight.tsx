import { Grid, Input } from '@mui/joy'
import { Typography, TextField, MenuItem, Button } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import MailIcon from '@mui/icons-material/Mail'

import React from 'react'
export const Reight = () => {
  return (
    <Grid
      display={'row'}
      sx={{ width: '400px', textAlign: 'center', ml: 5, mr: 5, mt: 5 }}
    >
      <Grid display={'row'} sx={{ mb: 2 }}>
        <MailIcon />
        <Typography sx={{ mt: 1, mr: 2 }}>Email</Typography>
        <Input sx={{ height: '10px' }} placeholder="Placeholder" />
      </Grid>

      <Grid display={'row'} sx={{ mb: 2 }}>
        <GitHubIcon />
        <Typography sx={{ mt: 1 }}>GitHub URL</Typography>
        <Input sx={{ height: '10px' }} placeholder="Placeholder" />
      </Grid>

      <Grid display={'row'} sx={{ mb: 2 }}>
        <FacebookIcon />
        <Typography sx={{ mt: 0.5 }}>Facebook URL</Typography>
        <Input sx={{ height: '10px' }} placeholder="Placeholder" />
      </Grid>
      <Grid sx={{ mt: 15, mb: 2 }}>
        <Button variant="contained">Update </Button>
      </Grid>
      <Button variant="contained">cancel</Button>
    </Grid>
  )
}
