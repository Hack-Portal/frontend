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

    if (formData.username) {
      body.append('username', formData.username)
    }
    if (formData.explantory_text) {
      body.append('explantory_text', formData.explantory_text)
    }
    if (Array.isArray(formData.frameworks)) {
      formData.frameworks.forEach((tag) => body.append('frameworks[]', tag))
    }
    if (Array.isArray(formData.tech_tags)) {
      formData.tech_tags.forEach((tag) => body.append('tech_tags[]', tag))
    }
    if (formData.frameworks) {
      body.append('frameworks', formData.frameworks)
    }
    if (formData.email) {
      body.append('email', formData.email)
    }
    if (formData.discord_link) {
      body.append('Twitter', formData.discord_link)
    }
    if (formData.github_link) {
      body.append('Github', formData.github_link)
    }
    if (formData.twitter_link) {
      body.append('Discord', formData.discord_link)
    }
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
