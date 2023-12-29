import { useState } from 'react'

export const useMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [isOpenedModal, setIsOpenedModal] = useState<boolean>(false)

  const isMenuOpened = Boolean(anchorEl)
  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const handleEdit = () => {
    handleCloseMenu()
    setIsOpenedModal(true)
  }

  const handleCloseModal = () => {
    setIsOpenedModal(false)
  }
  
  return {
    anchorEl,
    isMenuOpened,
    isOpenedModal,
    handleOpenMenu,
    handleCloseMenu,
    handleEdit,
    handleCloseModal,
  }
}
