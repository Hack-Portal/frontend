import { Api_CreateAccountRequestBody } from '@/api/@types'
import { UserRepository } from '@/repositories/UserRepository'
import { FieldValues, SubmitHandler } from 'react-hook-form'
import { SignUpFormData } from '../types/formData'
import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { v4 as uuidv4 } from 'uuid'

// Generate a unique ID
const uniqueId = uuidv4()
export class CreateUser {
  private userRepository: UserRepository
  private firebaseRepository: FirebaseRepository

  constructor() {
    this.userRepository = UserRepository.getInstance()
    this.firebaseRepository = FirebaseRepository.getInstance()
  }

  public create: SubmitHandler<SignUpFormData> = async (formData) => {
    const user = await this.firebaseRepository.getCurrentUser()
    const uuid = uuidv4()

    if (!user) {
      throw new Error('ユーザーが存在しません')
    }
    const token = await user?.getIdToken()

    const body: Api_CreateAccountRequestBody = {
      icon: formData.icon,
      locate_id: formData.locate_id,
      password: formData.password,
      username: formData.username,
      show_locate: false,
      show_rate: false,
      user_id: user?.uid ? user.uid : uuid,
    }
    try {
      const user = await this.userRepository.create(body, token)

      return user
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
    }
  }
}
