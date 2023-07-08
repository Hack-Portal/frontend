import React from 'react'
import { ListItem, ListItemButton, ListItemText,Link } from '@mui/material'
//分割しようとしたけど反映失敗したので保留
export const HeaderLink = (name,link) => {
  return (
    <>
        <Link href={link}>
          <ListItem sx={{ width: 142, textAlign: 'center' }}>
            <ListItemButton sx={{ borderRadius: '5%' }}>
              <ListItemText
                sx={{ fontFamily: 'bold' }}
                primary={name}
              />
            </ListItemButton>
          </ListItem>
        </Link>
    </>
  )
}
