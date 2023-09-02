import { FirebaseRepository } from '@/repositories/FirebaseRepository'
import { UserRepository } from '@/repositories/UserRepository'

export class LoginCheck {
  private firebaseRepository: FirebaseRepository
  private userRepository: UserRepository

  constructor() {
    this.firebaseRepository = FirebaseRepository.getInstance()
    this.userRepository = UserRepository.getInstance()
  }

  public async settingRoute(callback: (pathname: string) => void) {
    const user = await this.firebaseRepository.getCurrentUser()
    // loginしていない場合はfalseを返す
    if (!user) return false
    const token = await user?.getIdToken()
    try {
      const response = await this.userRepository.fetchById(user.uid, token)
      if (response) {
        callback('/usersetting/' + user.uid)
      }
      // loginしているが、DBにユーザー情報がない場合はアカウント削除する
    } catch (error) {
      // console.log(error)
    }
  }
}
