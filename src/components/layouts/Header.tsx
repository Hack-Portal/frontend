'use client'
import Link from 'next/link'
import Image from 'next/image'
import {
  Box,
  ListItem,
  Typography,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { useHeader } from '@/components/hooks/useHeader'

export const Header = () => {
  const { IsActive } = useHeader()

  const NAV_ITEMS = [
    {
      label: 'ハッカソン',
      href: '/hackathon',
    },
    // {
    //   label: 'ランキング',
    //   href: '/ranking',
    // },
    // {
    //   label: 'メンバー募集',
    //   href: '/room',
    // },
  ]

  return (
    <Box
      sx={{
        width: '100%',
        px: 3,
        position: 'fixed',
        zIndex: 200,
        top: 0,
        left: 0,
        maxHeight: '70px',
        height: '15vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)',
        bgcolor: '#fefefe',
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
            width={70}
            height={70}
            style={{
              width: '10vw',
              height: '10vw',
              minWidth: '50px',
              minHeight: '50px',
              maxHeight: '70px',
              maxWidth: '70px',
              borderRadius: '50%',
            }}
          />
        </Link>
        {NAV_ITEMS.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            style={{
              borderBottom: IsActive(item.href) ? 'solid 2px #0288d1' : 'none',
              height: '15vw',
              maxHeight: '70px',
              padding: '6px 0 0  0',
            }}
          >
            <ListItem sx={{ p: 0, height: '100%' }}>
              <ListItemButton sx={{ borderRadius: '5%', height: '100%' }}>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontWeight: IsActive(item.href) ? 'bold' : 'normal',
                        color: IsActive(item.href) ? '#333' : '#aaa',
                        fontSize: ['0.8rem', '1rem'],
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
        {/* <Link href="/notification"> */}
        {/* <Badge badgeContent={2} variant="solid" color="danger"> */}
        {/* <NotificationsNoneOutlinedIcon
              sx={{
                width: 30,
                height: 30,
              }}
              color="info"
            /> */}
        {/* </Badge> */}
        {/* </Link> */}

        {/* <Link href="/joinedRoom"> */}
        {/* <Badge badgeContent={2} variant="solid" color="danger"> */}
        {/* <MailOutlineIcon
              sx={{
                width: 30,
                height: 30,
              }}
              color="info"
            /> */}
        {/* </Badge> */}
        {/* </Link> */}

        {/* {user ? (
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
              <Button variant="outlined">ログイン</Button>
            </Link>
          )} */}
      </Box>
    </Box>
  )
}
