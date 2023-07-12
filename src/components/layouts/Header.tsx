import * as React from 'react'
import Badge from '@mui/joy/Badge'
import Box from '@mui/joy/Box'
import Input from '@mui/joy/Input'
import ListItem from '@mui/joy/ListItem'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import Link from 'next/link'
import Sheet from '@mui/joy/Sheet'
import GroupsIcon from '@mui/icons-material/Groups'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'

export const Header = () => {
  return (
    <Box
      sx={{
        top: 0,
        left: 0,
        width: '100%',
        height: '75px ',
        py: 2,
        px: 1,
      }}
    >
      <Sheet
        color="primary"
        sx={{
          position: 'fixed',
          zIndex: 200,
          top: 0,
          left: 0,
          width: '100%',
          height: '10%',
          display: 'flex',
          alignItems: 'center',
          py: 2,
          px: 1,
        }}
      >
        <Link href="/">
          <ListItemButton sx={{ borderRadius: '13%' }}>
            <GroupsIcon sx={{ height: 50, width: 50 }} />
          </ListItemButton>
        </Link>
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            left: 0,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            py: 2,
            px: 1,
          }}
        >
          <Link href="/">
            <ListItem sx={{ width: 142 }}>
              <ListItemButton sx={{ borderRadius: '5%' }}>
                <ListItemText
                  sx={{ fontFamily: 'bold', textAlign: 'center' }}
                  primary="ハッカソン"
                />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link href="/ranking">
            <ListItem sx={{ width: 142 }}>
              <ListItemButton sx={{ borderRadius: '5%' }}>
                <ListItemText
                  sx={{ fontFamily: 'bold', textAlign: 'center' }}
                  primary="ランキング"
                />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link href="/room">
            <ListItem sx={{ width: 142, textAlign: 'center' }}>
              <ListItemButton sx={{ borderRadius: '5%' }}>
                <ListItemText
                  sx={{ fontFamily: 'bold' }}
                  primary="メンバー募集"
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row-reverse',
            flexShrink: 0,
          }}
        >
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Input
              placeholder="Search for anything..."
              variant="soft"
              size="sm"
              sx={{
                solid: '6px #e0e0e0',
                '--Input-radius': '40px',
                '--Input-paddingInline': '12px',
                width: 300,
                display: { xs: 'none', lg: 'flex' },
              }}
            />

            <Box sx={{ display: 'flex', marginRight: 5, marginLeft: 5 }}>
              <ListItem>
                <ListItemButton sx={{ borderRadius: '15%' }}>
                  <Link href="/notification">
                    <Badge badgeContent={2} variant="solid" color="danger">
                      <NotificationsNoneOutlinedIcon
                        sx={{
                          width: 30,
                          height: 30,
                        }}
                        color="info"
                      />
                    </Badge>
                  </Link>
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton sx={{ borderRadius: '15%' }}>
                  <Link href="/dm">
                    <Badge badgeContent={2} variant="solid" color="danger">
                      <MailOutlineIcon
                        sx={{
                          width: 30,
                          height: 30,
                        }}
                        color="info"
                      />
                    </Badge>
                  </Link>
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton sx={{ borderRadius: '15%' }}>
                  <Link href="/user">
                    <PermIdentityIcon
                      sx={{
                        width: 30,
                        height: 30,
                        marginRight: 1,
                        marginLeft: 1,
                      }}
                      color="info"
                    />
                  </Link>
                </ListItemButton>
              </ListItem>
            </Box>
          </Box>
        </Box>
      </Sheet>
    </Box>
  )
}
