import { SignUpFormData } from '@/app/signup/types/formData'
import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { SubmitHandler } from 'react-hook-form'
import { ProfileFormData } from '../types/formData'
import { UpdateUserInterface } from '../types/UpdateUserInterface'
import { UserRepository } from '@/repositories/UserRepository'

export class UpdateUser implements UpdateUserInterface {
  private userRepository: UserRepository
  private firebaseRepository: FirebaseRepository

  constructor() {
    this.userRepository = UserRepository.getInstance()
    this.firebaseRepository = FirebaseRepository.getInstance()
  }

  // UpdateUserクラスのupdateメソッド
  public update: SubmitHandler<ProfileFormData> = async (formData) => {
    const user = await this.firebaseRepository.getCurrentUser()

    if (!user) {
      throw new Error('ユーザーが存在しません')
    }

    const token = await user?.getIdToken()

    const body = new FormData()

    // テキストデータを更新
    body.append('username', formData.username)
    body.append('explantory_text', formData.explantory_text)
    body.append('locate_id', formData.show_locate.toString())
    body.append('tech_tags', formData.tech_tags)
    body.append('frameworks', formData.frameworks)

    body.append('email', formData.email)
    body.append('twitter', formData.discord_link)
    body.append('github', formData.github_link)
    body.append('discord', formData.discord_link)
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
