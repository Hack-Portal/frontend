import { SignUpFormData } from '@/app/signup/types/formData'
import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { UserRepository } from '@/repositories/UserRepository'
import { UserInterface } from '@/types/UserInterface'
import { SubmitHandler } from 'react-hook-form'
import { ProfileFormData } from '../types/formData'

export class UpdateUser implements UserInterface {
  private userRepository: UserRepository
  private firebaseRepository: FirebaseRepository

  constructor() {
    this.userRepository = UserRepository.getInstance()
    this.firebaseRepository = FirebaseRepository.getInstance()
  }

  // UpdateUser クラス内に追加
  public update: SubmitHandler<ProfileFormData> = async (formData) => {
    const user = await this.firebaseRepository.getCurrentUser()

    if (!user) {
      throw new Error('ユーザーが存在しません')
    }

    const token = await user?.getIdToken()

    const body = new FormData()

    // テキストデータを更新
    body.append('username', formData.username)

    body.append('introduction', formData.introduction)

    // アイコン画像を更新
    if (formData.icon) {
      body.append('icon', formData.icon)
    }

    try {
      // UserRepository の update メソッドを呼び出す
      const updatedUser = await this.userRepository.update(
        user.uid,
        body,
        token,
      )
      return updatedUser
    } catch (error) {
      console.error('Serviceのエラー:', error)
      throw error
    }
  }
}
