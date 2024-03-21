import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'hack portal',
  description:
    'hack portal とは、ハッカソンの情報をまとめたポータルサイトです。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="favicon.ico" />
      </head>

      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
