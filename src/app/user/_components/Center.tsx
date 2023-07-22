import { Grid, Input } from '@mui/joy'
import { Typography, TextField, MenuItem } from '@mui/material'

import React from 'react'
export const Center = () => {
  const Year = [...Array(100)].map((_, i) => ({
    label: `${2023 - i}`,
    value: 2023 - i,
  }))

  const Month = [...Array(12)].map((_, i) => ({
    label: `${i + 1}`,
    value: i + 1,
  }))

  const Day = [...Array(31)].map((_, i) => ({
    label: `${i + 1}`,
    value: i + 1,
  }))

  return (
    <>
      <Grid display={'row'}>
        <Grid display={'flex'}>
          <Typography sx={{ mt: 1, mr: 2 }}>Name</Typography>
          <Input sx={{ height: '10px' }} placeholder="Placeholder" />
        </Grid>

        <Grid display={'flex'}>
          <Typography sx={{ mt: 1, mr: 2 }}>Email</Typography>
          <Input sx={{ height: '10px' }} placeholder="Placeholder" />
        </Grid>

        <Grid display={'row'}>
          <Typography sx={{ mt: 1, mr: 2 }} color={'#999'}>
            Birthday
          </Typography>
          <TextField select label="Year" defaultValue="2023">
            {Year.map((option1) => (
              <MenuItem key={option1.label} value={option1.value}>
                {option1.value}
              </MenuItem>
            ))}
          </TextField>

          <TextField select label="Month" defaultValue="1">
            {Month.map((option2) => (
              <MenuItem key={option2.label} value={option2.value}>
                {option2.value}
              </MenuItem>
            ))}
          </TextField>

          <TextField select label="Day" defaultValue="1">
            {Day.map((option3) => (
              <MenuItem key={option3.label} value={option3.value}>
                {option3.value}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </>
  )
}
