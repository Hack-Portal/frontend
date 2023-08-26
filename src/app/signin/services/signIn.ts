import { UserRepository } from '@/repositories/UserRepository'
import { SubmitHandler } from 'react-hook-form'
import { EmailSignInFormData } from '../types/formData'
import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { GoogleAuthProvider } from 'firebase/auth'

export class SignIn {
  private firebaseRepository: FirebaseRepository
  private userRepository: UserRepository
  private callback: (pathname: string) => void

  constructor(callback: (pathname: string) => void) {
    this.firebaseRepository = FirebaseRepository.getInstance()
    this.userRepository = UserRepository.getInstance()
    this.callback = callback
  }

  public email = async (formData: EmailSignInFormData) => {
    const { email, password } = formData

    const firebaseUser = await this.firebaseRepository.emailSignIn(
      email,
      password,
    )


    // errorなら
    if (typeof firebaseUser == 'string') {
      return firebaseUser
    }

    try {
      const user = await this.userRepository.fetchById(
        firebaseUser.uid,
        await firebaseUser.getIdToken(),
      )

      if (typeof user == 'string') {
        return user
      }

      this.callback('/user/' + firebaseUser.uid)
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
    }
  }

  public google = async () => {
    const firebaseUser = await this.firebaseRepository.SNSSignIn(
      new GoogleAuthProvider(),
    )

    if (!firebaseUser) {
      return 'google sign in error'
    }

    try {
      const user = await this.userRepository.fetchById(
        firebaseUser.uid,
        await firebaseUser.getIdToken(),
      )
      if (typeof user !== 'string') {
        this.callback('/user/' + firebaseUser.uid)
      }
    } catch (error) {
      return 'posgresql not found error'
    }
  }
}
