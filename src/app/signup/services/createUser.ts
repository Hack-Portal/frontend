import { Domain_CreateAccountRequest } from '@/api/@types'
import { UserRepository } from '@/repositories/UserRepository'
import { SubmitHandler } from 'react-hook-form'
import { EmailSignUpFormData, SignUpFormData } from '../types/formData'
import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { GoogleAuthProvider } from 'firebase/auth'
import { CreateUserInterface } from '../types/CreateUserInterface'

export class CreateUser implements CreateUserInterface {
  private userRepository: UserRepository
  private firebaseRepository: FirebaseRepository

  constructor() {
    this.userRepository = UserRepository.getInstance()
    this.firebaseRepository = FirebaseRepository.getInstance()
  }

  public create: SubmitHandler<SignUpFormData> = async (formData) => {
    const user = await this.firebaseRepository.getCurrentUser()

    if (!user) {
      throw new Error('ユーザーが存在しません')
    }

    const token = await user?.getIdToken()

    const body: Domain_CreateAccountRequest = {
      icon: formData.icon,
      locate_id: formData.locate_id,
      username: formData.username,
      show_locate: false,
      show_rate: false,
      user_id: user.uid,
    }
    try {
      const user = await this.userRepository.create(body, token)
      return user
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
    }
  }

  public authEmail = async (
    formData: EmailSignUpFormData,
    callback: () => void,
  ) => {
    try {
      // console.log(formData)
      const user = await this.firebaseRepository.emailSignUp(
        formData.email,
        formData.password,
      )
      if (typeof user !== 'string') {
        callback()
      }

      return user
    } catch (error) {
      throw error
    }
  }

  public authGoogle = async (callback: () => void) => {
    try {
      const user = await this.firebaseRepository.SNSSignIn(
        new GoogleAuthProvider(),
      )
      if (user) {
        callback()
      }
      return user
    } catch (error) {
      throw error
    }
  }
}
