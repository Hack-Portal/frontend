import React, { type ReactNode } from 'react'

export const metadata = {
  title: 'hackathon apply',
  description: 'ハッカソンの登録申請をします。',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
