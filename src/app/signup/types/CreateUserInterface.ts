import { SubmitHandler } from 'react-hook-form'
import { EmailSignUpFormData, SignUpFormData } from './formData'
import { User } from 'firebase/auth'

export interface CreateUserInterface {
  create: SubmitHandler<SignUpFormData>
  authEmail: (
    formData: EmailSignUpFormData,
    callback: () => void,
  ) => Promise<User|string>
}
