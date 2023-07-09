import { Box } from '@mui/system'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

import React from 'react'
import { Grid, ListItem, ListItemButton } from '@mui/joy'

export const PythonFrameworkTag = () => {
  return (
    <Box>
      <FormGroup>
        <ListItem>
          <ListItemButton>
            <FormControlLabel
              control={<Checkbox sx={{ display: 'none' }} />}
              label="Django"
            />
          </ListItemButton>
          <ListItemButton>
            <FormControlLabel
              control={<Checkbox sx={{ display: 'none' }} />}
              label="Flask"
            />
          </ListItemButton>
          <ListItemButton>
            <FormControlLabel
              control={<Checkbox sx={{ display: 'none' }} />}
              label="FastAPI"
            />
          </ListItemButton>
        </ListItem>
      </FormGroup>
    </Box>
  )
}

export const JavaScriptFrameworkTag = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <FormGroup>
        <ListItem>
          <ListItemButton>
            <FormControlLabel
              control={<Checkbox sx={{ display: 'none' }} />}
              label="React.js"
            />
          </ListItemButton>
          <ListItemButton>
            <FormControlLabel
              control={<Checkbox sx={{ display: 'none' }} />}
              label="Vue.js"
            />
          </ListItemButton>
          <ListItemButton>
            <FormControlLabel
              control={<Checkbox sx={{ display: 'none' }} />}
              label="Three.js"
            />
          </ListItemButton>
          <ListItemButton>
            <FormControlLabel
              control={<Checkbox sx={{ display: 'none' }} />}
              label="Next.js"
            />
          </ListItemButton>
          <ListItemButton>
            <FormControlLabel
              control={<Checkbox sx={{ display: 'none' }} />}
              label="Node.js"
            />
          </ListItemButton>
          <ListItemButton>
            <FormControlLabel
              control={<Checkbox sx={{ display: 'none' }} />}
              label="Angular"
            />
          </ListItemButton>
        </ListItem>
      </FormGroup>
    </Box>
  )
}
