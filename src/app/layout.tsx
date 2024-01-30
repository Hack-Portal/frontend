import RecoilProvider from '@/provider/recoilProvider'
import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components/layouts/Header'
import { Footer } from '@/components/layouts/Footer'
import GoogleAnalytics from './_components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'hack portal',
  description:
    'hack portal とは、ハッカソンの情報をまとめたポータルサイトです。',
  keywords:
    'ハッカソン, ハッカソン一覧, ハッカソンまとめ, ハッカソン情報, ハックポータル, hack, hackhack, hackathon, hack portal, hackathon portal, hackathon list, hackathon info, hackathon information',
}

export default function RootLayout(props: any) {
  const { children } = props

  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="favicon.ico" />
        <GoogleAnalytics />
      </head>

      <body className={inter.className}>
        <Header />
        <main>
          <RecoilProvider>{children}</RecoilProvider>
        </main>
        <Footer />
      </body>
    </html>
  )
}
