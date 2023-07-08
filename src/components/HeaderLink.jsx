import React from 'react'
import { ListItem, ListItemButton, ListItemText,Link } from '@mui/material'

export const HeaderLink = (name,link) => {
  return (
    <>
    <Link  href={link}>
    <ListItem sx={{width:100}}>
            <ListItemButton>
            <ListItemText fontWeight="bold" sx={{ ml: 2 }} primary={name} />
            </ListItemButton>
        </ListItem>
    </Link>
    </>
  )
}
