import { auth } from '@/lib/firebase/client'
import { User, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useCustomRouter } from '@/components/layouts/hooks/CustomRouter'
import { useIcon } from '@/hooks/useIcon'
import { SignUpFormData } from '@/app/signup/types/formData'
import { ProfileFormData } from '../types/formData'

export const useIconUpdate = () => {
  const [user, setUser] = useState<User>()
  const [error, setError] = useState<string>()
  const { handlePushRouter } = useCustomRouter()
  const { icon, handleSetIcon, preview } = useIcon()

  const updateUser = async (formData: ProfileFormData) => {
    const requestData = {
      icon: icon,
    }
    const u = await requestData
  }

  return {
    user,
    error,
    handleSetIcon,
    preview,
  }
}
