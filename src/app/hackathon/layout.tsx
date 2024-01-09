import { Inter } from 'next/font/google'
export const metadata = {
  title: 'hackathon list',
  description: 'ハッカソンの一覧を表示します。',
}

export default function RootLayout(props: any) {
  const { children } = props

  return <>{children}</>
}
