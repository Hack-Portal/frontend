import { useEffect, useState } from 'react'

export const useMenuCheck = (isOwner: boolean, isMenuOpen: boolean) => {
  const [text, setText] = useState(isOwner ? '削除' : '退出')
  const [isConfirm, setIsConfirm] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      handleCancel()
    }
  }, [isMenuOpen])

  const handleConfirm = () => {
    if (isConfirm) return
    setText((prevState) => '本当に' + prevState + 'しますか？')
    setIsConfirm(true)
  }

  const handleCancel = () => {
    setText(isOwner ? '削除' : '退出')
    setIsConfirm(false)
  }

  return { text, isConfirm, handleConfirm }
}
