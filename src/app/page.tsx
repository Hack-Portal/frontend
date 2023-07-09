'use client'
import { Header } from '@/components/Header'
import { LoginForm } from '@/components/LoginForm'
import { RegisterForm } from '@/components/RegisterForm'
export default function Home() {
  return (
    <main style={{ background: 'white' }}>
      {/* <Header /> */}
      {/* <LoginForm /> */}
      <RegisterForm />
    </main>
  )
}
