'use client'
import { Header } from '@/components/Header'
import { RegisterForm } from '@/components/AuthForm/RegisterForm'
export default function Home() {
  return (
    <body style={{ background: 'white' }}>
      <main>
        <RegisterForm />
      </main>
    </body>
  )
}
