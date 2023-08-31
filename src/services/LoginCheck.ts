import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { UserRepository } from '@/repositories/UserRepository'

export class LoginCheck {
  private firebaseRepository: FirebaseRepository
  private userRepository: UserRepository

  constructor() {
    this.firebaseRepository = FirebaseRepository.getInstance()
    this.userRepository = UserRepository.getInstance()
  }

  public async check() {
    const user = await this.firebaseRepository.getCurrentUser()
    // loginしていない場合はログインに渡す
    if (!user) {
      return false
    }
    

    const token = await user?.getIdToken()
    
    try {
      const response = await this.userRepository.fetchById(user.uid, token)
      if (response) {
        return true
      }
      // loginしているが、DBにユーザー情報がない場合はアカウント削除する
    } catch (error) {
      this.firebaseRepository.deleteAccount()
    }
  }
}
