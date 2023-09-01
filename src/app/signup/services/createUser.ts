import { Domain_CreateAccountRequest } from '@/api/@types'
import { UserRepository } from '@/repositories/UserRepository'
import { SubmitHandler } from 'react-hook-form'
import { EmailSignUpFormData, SignUpFormData } from '../types/formData'
import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { GoogleAuthProvider } from 'firebase/auth'
import { CreateUserInterface } from '../types/CreateUserInterface'
import { AxiosError } from 'axios'

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

    const body = new FormData()

    // テキストデータを追加
    body.append('locate_id', String(formData.locate_id))
    body.append('username', formData.username)
    body.append('show_locate', 'false')
    body.append('show_rate', 'false')
    body.append('account_id', user.uid)

    // アイコン（ファイル）を追加
    if (formData.icons) {
      body.append('icons', formData.icons)
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
        const dbUser = await this.userRepository.fetchById(
          user.uid,
          await user.getIdToken(),
        )
      }
      return user
    } catch (error: unknown) {
      if (error instanceof Error) {
        const axiosError = error as AxiosError
        if (axiosError.response && axiosError.response.status === 403) {
          // 403エラー時の処理
          callback()
        } else {
          // それ以外のエラー
          throw error
        }
      }
    }
  }
}
