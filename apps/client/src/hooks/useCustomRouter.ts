import { useRouter, usePathname } from 'next/navigation'

export const useCustomRouter = () => {
  const router = useRouter()
  const IsActive = (pathname: string) => usePathname() === pathname
  const handlePushRouter = (pathname: string) => {
    router.push(pathname)
  }

  const handleBackRouter = (): void => {
    router.back()
  }

  return { IsActive, handlePushRouter, handleBackRouter }
}
