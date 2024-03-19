import { Card, Typography, Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  title: string
  href: string
  src: string
  text: string
}

export const Content = (props: Props) => {
  const { title, href, src, text } = props

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '330px',
      }}
      key={title}
    >
      <Link href={href} passHref={true}>
        <Image
          src={src}
          width={330}
          height={270}
          alt={title}
          style={{
            objectFit: 'cover',
            padding: '0 10px',
            width: '100%',
            height: 'auto',
          }}
          sizes="100vw"
        />
        <Box sx={{ p: 2 }}>
          <Typography
            fontSize={'1.5rem'}
            fontWeight={'bold'}
            color={'#333'}
            mb={1}
            sx={{ ...responsiveStyle.title_text }}
          >
            {title}
          </Typography>
          <Typography>{text}</Typography>
        </Box>
      </Link>
    </Card>
  )
}
const responsiveStyle = {
  title_text: {
    fontSize: {
      xs: '1.3rem', // エクストラスモールデバイス
      sm: '1.5rem', // スモールデバイス
      md: '1.5rem', // ミディアムデバイス
      lg: '1.5rem', // ラージデバイス
      xl: '1.5rem', // エクストララージデバイス
    },
  },
}
