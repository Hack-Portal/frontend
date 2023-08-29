import { Box, Card, CardContent, CardMedia, Grid } from '@/lib/mui/muiRendering'
import { openInNewTab } from '@/utils/openInNewTab'
import { Typography } from '@mui/joy'
import Link from 'next/link'

import React from 'react'

export const Footer = () => {
  return (
    <Card
      sx={{
        px: 16,
        py: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      <Grid
        container
        alignItems={'center'}
        gap={4}
        sx={{ borderBottom: '1px solid #ddd' }}
        direction={'row'}
        justifyContent={'space-between'}
      >
        <Link href="/">
          <CardMedia
            src={'/image/logo.svg'}
            component="img"
            sx={{
              width: '100px',
              height: '100px',
              objectFit: 'contain',
            }}
          />
        </Link>
        <Grid
          container
          direction={'row'}
          sx={{ width: 'auto' }}
          gap={4}
          alignItems={'center'}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/wsrNZUWUR6"
          >
            <CardMedia
              src={'/image/discord.svg'}
              component="img"
              sx={{
                width: '50px',
                height: '50px',
                objectFit: 'contain',
              }}
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/Hack_Hack_JP"
          >
            <CardMedia
              src={'/image/twitter.svg'}
              component="img"
              sx={{
                width: '70px',
                height: '70px',
                objectFit: 'contain',
              }}
            />
          </a>
        </Grid>
      </Grid>
      <CardContent sx={{ display: 'flex', gap: 2, p: 0 }}>
        {FooterLink.map((link) => (
          <Grid
            container
            gap={2}
            sx={{ width: 'auto' }}
            justifyContent={'center'}
            alignItems={'center'}
            key={link.title}
          >
            <Link href={link.href} key={link.title}>
              <Typography
                sx={{
                  cursor: 'pointer',
                }}
              >
                {link.title}
              </Typography>
            </Link>
            <Typography color="neutral">&Iota;</Typography>
          </Grid>
        ))}
        <Typography>&copy; 2023 HACK PORTAL</Typography>
      </CardContent>
    </Card>
  )
}

const FooterLink = [
  { title: '利用規約', href: '/' },
  { title: 'プライバシーポリシー', href: '/' },
  { title: '情報セキュリティーポリシー', href: '/' },
  { title: '個人情報保護方針', href: '/' },
]
