'use client'
import * as React from 'react'
import Box from '@mui/joy/Box'
import ListItem from '@mui/joy/ListItem'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import Link from 'next/link'
import Sheet from '@mui/joy/Sheet'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import Image from 'next/image'
import { Button, Typography } from '@mui/material'
import { useCustomRouter } from '../../hooks/useCustomRouter'
import { useHeader } from '../hooks/useHeader'

export const Header = () => {
  const { IsActive, user } = useHeader()

  const NAV_ITEMS = [
    {
      label: 'ハッカソン',
      href: '/hackathon',
    },
    // {
    //   label: 'ランキング',
    //   href: '/ranking',
    // },
    {
      label: 'メンバー募集',
      href: '/room',
    },
  ]

  return (
    <Box
      sx={{
        width: '100%',
        height: '56px ',
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
          maxHeight: '75px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 3,
          boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Link href="/" style={{ margin: '0 16px 0 0' }}>
            <Image
              src={'/image/logo.svg'}
              alt="logo"
              width={87.5}
              height={35}
            />
          </Link>
          {NAV_ITEMS.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              style={{
                borderBottom: IsActive(item.href)
                  ? 'solid 2px #0288d1'
                  : 'none',
                padding: '6px 0 0 0',
              }}
            >
              <ListItem>
                <ListItemButton sx={{ borderRadius: '5%' }}>
                  <ListItemText
                    primary={
                      <Typography
                        style={{
                          fontWeight: IsActive(item.href) ? 'bold' : 'normal',
                          color: IsActive(item.href) ? '#333' : '#aaa',
                        }}
                      >
                        {item.label}
                      </Typography>
                    }
                    sx={{}}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </Box>

        <Box sx={{ display: 'flex', gap: 3 }}>
          <Link href="/notification">
            {/* <Badge badgeContent={2} variant="solid" color="danger"> */}
            <NotificationsNoneOutlinedIcon
              sx={{
                width: 30,
                height: 30,
              }}
              color="info"
            />
            {/* </Badge> */}
          </Link>

          <Link href="/joinedRoom">
            {/* <Badge badgeContent={2} variant="solid" color="danger"> */}
            <MailOutlineIcon
              sx={{
                width: 30,
                height: 30,
              }}
              color="info"
            />
            {/* </Badge> */}
          </Link>

          {user ? (
            <Link href={`/user/${user.uid}`}>
              <PermIdentityIcon
                sx={{
                  width: 30,
                  height: 30,
                }}
                color="info"
              />
            </Link>
          ) : (
            <Link href={'/signin'}>
              <Button variant='outlined' >ログイン</Button>
            </Link>
          )}
        </Box>
      </Sheet>
    </Box>
  )
}
