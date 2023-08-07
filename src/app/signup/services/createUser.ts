import { Api_CreateAccountRequestBody } from '@/api/@types'
import { UserRepository } from '@/repositories/UserRepository'
import { FieldValues, SubmitHandler } from 'react-hook-form'
import { SignInFormData } from '../types/formData'
import { FirebaseRepository } from '@/repositories/FirebaseRepository'

export class CreateUser {
  private userRepository: UserRepository
  private firebaseRepository: FirebaseRepository

  constructor() {
    this.userRepository = UserRepository.getInstance()
    this.firebaseRepository = FirebaseRepository.getInstance()
  }

  public async create(formData: SignInFormData) {
    const user = await this.firebaseRepository.getCurrentUser()

    if (!user) {
      throw new Error('ユーザーが存在しません')
    }

    const body: Api_CreateAccountRequestBody = {
      icon: formData.icon,
      locate_id: formData.locate_id,
      password: formData.password,
      username: formData.username,
      show_locate: false,
      show_rate: false,
      user_id: user.uid,
    }
    try {
      const user = await this.userRepository.create(body)
      return user
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
    }
  }
}
