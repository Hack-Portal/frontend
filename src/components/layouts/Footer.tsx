import { Grid, Typography } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
  return (
    <Grid
      container
      direction={'column'}
      gap={4}
      sx={{
        px: 5,
        pt: 10,
        pb: 1,
        background: '#fcfcfc',
      }}
    >
      <Grid
        container
        alignItems={'center'}
        sx={{ borderBottom: '1px solid #ddd', width: '100%' }}
        direction={'row'}
        justifyContent={'space-between'}
        wrap={'nowrap'}
      >
        <Grid item xs={2}>
          <Link href="/">
            <Image
              src={'/image/logo.svg'}
              width={50}
              height={50}
              alt="logo"
              style={{
                borderRadius: '50%',
                objectFit: 'contain',
                width: '100%',
                height: 'auto',
                minWidth: '50px',
                minHeight: '50px',
                maxHeight: '50px',
                maxWidth: '50px',
              }}
              sizes="100vw"
            />
          </Link>
        </Grid>
        <Grid item xs={5} sm={9} />
        <Grid item xs={0}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/wsrNZUWUR6"
          >
            <Image
              src={'/image/discord.svg'}
              width={10}
              height={10}
              alt="discord"
              style={{
                width: '100%',
                height: 'auto',
                minWidth: '30px',
                minHeight: '30px',
                maxHeight: '40px',
                maxWidth: '40px',
              }}
              sizes="100vw"
            />
          </a>
        </Grid>
        <Grid item xs={1}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/Hack_Hack_JP"
          >
            <Image
              src={'/image/twitter.svg'}
              width={10}
              height={10}
              alt="twitter"
              style={{
                width: '100%',
                height: 'auto',
                minWidth: '40px',
                minHeight: '40px',
                maxHeight: '50px',
                maxWidth: '50px',
              }}
              sizes="100vw"
            />
          </a>
        </Grid>
      </Grid>
      <Grid container gap={2}>
        {/* {FooterLink.map((link) => (
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
            {link.title !== FooterLink[FooterLink.length - 1].title && (
              <Typography color="neutral">&Iota;</Typography>
            )}
          </Grid>
        ))} */}
      </Grid>
      <Typography>&copy; 2023 HACK PORTAL</Typography>
    </Grid>
  )
}

const FooterLink = [
  { title: '利用規約', href: '/' },
  { title: 'プライバシーポリシー', href: '/' },
  { title: '情報セキュリティーポリシー', href: '/' },
  { title: '個人情報保護方針', href: '/' },
]
