import * as React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Modal from '@mui/material/Modal'
import { Paper } from '@mui/material'

type Props = {
  href: string
  children: React.ReactNode
}

export default function ConfirmModalWindow(props: Props) {
  const { href, children } = props

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button onClick={handleOpen}>{children}</Button>
      <Modal open={open} onClose={handleClose}>
        <Paper
          sx={{
            position: 'absolute',
            display: 'flex',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box display={'flex'} margin={'auto'} flexDirection={'column'}>
            <Typography textAlign={'center'}>
              このルームに入室しますか？
            </Typography>
            <Box display={'flex'} justifyContent={'center'} sx={{ mt: 2 }}>
              <Button href={href}>はい</Button>
              <Button href="/room" sx={{ color: '#111' }}>
                いいえ
              </Button>
            </Box>
          </Box>
        </Paper>
      </Modal>
    </div>
  )
}
