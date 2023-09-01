import { FirebaseRepository } from '@/repositories/FirebaseRepository'
// import { useRouter } from 'next/router'
// const router = useRouter()

export class Transition {
  private firebaseRepository: FirebaseRepository

  constructor() {
    this.firebaseRepository = FirebaseRepository.getInstance()
  }

  public async signOutService() {
    try {
      await this.firebaseRepository.signOut()
    } catch (error) {
      console.error('signOutServiceのエラー', error)
      throw error
    }
  }

  // public async settingService() {
  //   let settingPath: string | null = null
  //   let route = null

  //   try {
  //     const user = await this.firebaseRepository.getCurrentUser()
  //     settingPath = `user/${user?.uid}`
  //     const route = router.push(settingPath)

  //     if (!user) {
  //       throw new Error('ユーザーが存在しません')
  //     }
  //   } catch (error) {
  //     console.error('settingServiceのエラー', error)
  //     throw error
  //   }
  //   return route
  // }
}
