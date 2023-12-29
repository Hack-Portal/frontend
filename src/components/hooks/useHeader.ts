import { useCustomRouter } from '@/hooks/useCustomRouter'
// import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { User } from 'firebase/auth'
import { useEffect, useState } from 'react'

export const useHeader = () => {
  const [user, setUser] = useState<User | null>(null)
  //   const Firebase = new FirebaseRepository()

  //   useEffect(() => {
  //     const fetchUser = async () => {
  //       const user = await Firebase.getCurrentUser()
  //       setUser(user)
  //     }
  //     fetchUser()
  //   }, [])
  const { IsActive } = useCustomRouter()
  return {
    IsActive,
    // user
  }
}
