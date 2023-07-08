import * as React from 'react'
import { ColorPaletteProp } from '@mui/joy/styles'
import Badge from '@mui/joy/Badge'
import Box from '@mui/joy/Box'
import Input from '@mui/joy/Input'
import IconButton from '@mui/joy/IconButton'
import Typography from '@mui/joy/Typography'
import Sheet from '@mui/joy/Sheet'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { Avatar } from '@mui/joy'
import Image from 'next/image'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import Link from 'next/link'

export const Header = () => {
  return (
    <Sheet
      color="primary"
      sx={{
        position: 'fixed',
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
        <Image
          src="/common/logo.jpg"
          width={50}
          height={50}
          alt="logo"
          style={{ borderRadius: '50%' }}
        />
      </Link>
      <Link href="/hackathon">
        <Typography fontWeight="bold" sx={{ ml: 2 }}>
          ハッカソン
        </Typography>
      </Link>
      <Link href="/ranking">
        <Typography fontWeight="bold" sx={{ ml: 2 }}>
          ランキング
        </Typography>
      </Link>
      <Link href="/member">
        <Typography fontWeight="bold" sx={{ ml: 2 }}>
          メンバー募集
        </Typography>
      </Link>

      <Box
        sx={{ display: 'flex', flexDirection: 'row-reverse', flexShrink: 0 }}
      >
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Input
            placeholder="Search for anything..."
            variant="soft"
            size="sm"
            sx={{
              '--Input-radius': '40px',
              '--Input-paddingInline': '12px',
              width: 160,
              display: { xs: 'none', lg: 'flex' },
            }}
          />
          <Link href="/notification">
            <Badge badgeContent={2} variant="solid" color="danger">
              <NotificationsNoneOutlinedIcon
                sx={{ width: 30, height: 30 }}
                color="info"
              />
            </Badge>
          </Link>
          <Link href="/dm">
            <Badge badgeContent={2} variant="solid" color="danger">
              <MailOutlineIcon sx={{ width: 30, height: 30 }} color="info" />
            </Badge>
          </Link>
          <Link href="/user">
            <PermIdentityIcon sx={{ width: 30, height: 30 }} color="info" />
          </Link>
        </Box>
      </Box>
    </Sheet>
  )
}
