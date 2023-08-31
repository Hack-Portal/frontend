import { useCustomRouter } from '@/hooks/useCustomRouter'
import { LoginCheck } from '@/services/LoginCheck'
import { useEffect } from 'react'

export const useLoginCheck = (
  callback: () => void,
  disableRedirect: boolean = false,
) => {
  const { handlePushRouter } = useCustomRouter()
  const Login = new LoginCheck()

  useEffect(() => {
    let isMounted = true // マウント状態をトラッキング

    Login.check()
      .then((res) => {
        if (!isMounted) return // 早期リターンして以降の処理を停止

        // user情報がない場合はログイン画面に遷移する
        if (!res && !disableRedirect) {
          handlePushRouter('/signin')
          return
        }

        callback()
      })
      .catch((error) => {
        if (!isMounted) return // 早期リターンして以降の処理を停止

        console.error('useLoginCheckのエラー:', error)
        handlePushRouter('/signup')
      })

    return () => {
      isMounted = false // アンマウントを検出
    }
  }, [])
}
