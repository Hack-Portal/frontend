import React, { type ReactNode } from 'react'

export const metadata = {
  title: 'hackathon list',
  description: 'ハッカソンの一覧を表示します。',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
