import { useEffect, useState } from 'react'

export const useMenuCheck = (isOwner: boolean, isMenuOpen: boolean) => {
  const [text, setText] = useState(isOwner ? '削除' : '退出')
  const [isCheck, setIsCheck] = useState(false)
  
  useEffect(() => {
    if (isMenuOpen) {
     handleCancel()
    }
  }, [isMenuOpen])

  const handleCheck = () => {
    console.log('isCheck', isCheck);
    
    if (isCheck) return;
    setText((prevState) => '本当に' + prevState + 'しますか？')
    setIsCheck(true)
  }

  const handleCancel = () => {
    setText(isOwner ? '削除' : '退出')
    setIsCheck(false)
}

  return { text, isCheck, handleCheck }
}
