import RecoilProvider from '@/provider/recoilProvider'
import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components/layouts/Header'
import { Footer } from '@/components/layouts/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'hack portal',
  description: 'hack portal とは、ハッカソンの情報をまとめたポータルサイトです。',
}

export default function RootLayout(props: any) {
  const { children } = props

  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <main >
          <RecoilProvider>{children}</RecoilProvider>
        </main>
        <Footer />
      </body>
    </html>
  )
}
