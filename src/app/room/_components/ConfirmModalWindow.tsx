import * as React from 'react'
import {
  Box,
  Button,
  Typography,
  Modal,
  CardMedia,
} from '@/lib/mui/muiRendering'
import { Paper } from '@/lib/mui/muiRendering'
import { Domain_ListRoomResponse } from '@/api/@types'
import { RoomRecordRightBox } from './RoomList/RoomRecordRightBox'

type Props = {
  href: string
  children: React.ReactNode
  previewRoom?: Domain_ListRoomResponse
  handleSetPreview?: () => void
  handleJoinRoom?: () => void
}

export function ConfirmModalWindow(props: Props) {
  const { href, children, previewRoom, handleSetPreview, handleJoinRoom } =
    props

  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
    handleSetPreview && handleSetPreview()
  }

  const handleClose = () => setOpen(false)

  return (
    <Box sx={{ width: '100%' }}>
      <Button
        onClick={handleOpen}
        fullWidth
        sx={{ p: 0, textTransform: 'none' }}
      >
        {children}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Paper
          sx={{
            position: 'absolute',
            display: 'flex',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            justifyContent: 'center',
            p: 4,
          }}
        >
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            gap={4}
          >
            <Typography sx={{ fontSize: '2rem' }}>
              このルームに入室しますか？
            </Typography>
            <Paper
              sx={{
                minHeight: 250,
                maxHeight: 250,
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                p: 2,
                position: 'relative',
                boxSizing: 'border-box',
                overflow: 'hidden',
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: 218,
                  height: 218,
                  objectFit: 'cover',
                }}
                image={previewRoom?.hackathon?.icon}
                alt={previewRoom?.hackathon?.hackathon_name}
              />
              <RoomRecordRightBox
                hackathonName={previewRoom?.hackathon?.hackathon_name}
                title={previewRoom?.rooms?.title}
                member_limit={previewRoom?.rooms?.member_limit}
                now_member={previewRoom?.now_member}
                techs={previewRoom?.members_tech_tags}
                frameworks={previewRoom?.members_frameworks}
                expired={previewRoom?.hackathon?.expired}
              />
            </Paper>
            <Box display={'flex'} justifyContent={'center'} gap={10} mt={1}>
              <Button
                sx={{ fontSize: '1.7rem', px: 4 }}
                variant="contained"
                onClick={handleJoinRoom}
              >
                はい
              </Button>
              <Button
                onClick={handleClose}
                sx={{ fontSize: '1.7rem', color: '#fff' }}
                variant="contained"
                color="inherit"
              >
                いいえ
              </Button>
            </Box>
          </Box>
        </Paper>
      </Modal>
    </Box>
  )
}
