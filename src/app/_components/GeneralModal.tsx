import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

import { useOpen } from '@/hooks/useOpen'
import { IconButton, Modal } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
interface GeneralModalProps {
  children: React.ReactNode
  buttonContent?: React.ReactNode
}
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 20,
  p: 4,
}
export default function GeneralModal({
  children,
  buttonContent = <></>,
}: GeneralModalProps) {
  const { open, handleOpen } = useOpen()
  return (
    <>
      <IconButton onClick={handleOpen}>{buttonContent}</IconButton>
      <Modal open={open} onClose={handleOpen}>
        <Box sx={style}>
          <IconButton
            onClick={handleOpen}
            sx={{
              position: 'absolute',
              top: '0px',
              right: '0px',
            }}
          >
            <CloseIcon
              sx={{
                color: 'black',
                '&:hover': {
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />
          </IconButton>
          {children}
        </Box>
      </Modal>
    </>
  )
}
