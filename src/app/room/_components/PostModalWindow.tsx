'use client'

import { useState } from 'react'
import {
  Box,
  Modal,
  Button,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@/lib/mui/muiRendering'
import { BorderColorRoundedIcon } from '@/lib/mui/muiRendering'
import { useForm } from 'react-hook-form'
import { PostModal } from './types/modal'

// type Props = {
//   roomList: PostModal[]
// }

export const PostModalWindow = () => {
  // const { roomList } = props
  const [open, setOpen] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      teamName: '',
      selectedHackathon: '',
      selectedCount: 0,
      text: '',
    },
  })

  const text = watch('text')
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setValue('teamName', '')
    setValue('selectedHackathon', '')
    setValue('text', '')
  }

  const onSubmit = () => {
    handleClose()
  }

  return (
    <Box>
      <Button onClick={handleOpen}>
        <BorderColorRoundedIcon fontSize="large" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="ModalTitle"
        aria-describedby="ModalDescription"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 24,
              pt: 2,
              px: 4,
              pb: 3,
              width: 750,
            }}
          >
            <Typography variant="h6">メンバーを募集する</Typography>
            <TextField
              {...register('teamName', { maxLength: 40, minLength: 1 })}
              label="チーム名"
              variant="outlined"
              sx={{ mt: 3 }}
              fullWidth
              inputProps={{ height: '50px' }}
            />
            <FormControl variant="outlined" sx={{ mt: 3 }} fullWidth>
              <InputLabel id="hackathon-label">ハッカソン選択</InputLabel>
              <Select
                {...register('selectedHackathon')}
                labelId="hackathon-label"
                id="hackathon-select"
                label="ハッカソン選択"
              >
                {/* {roomList.map((room) => (
                  <MenuItem key={room.hackathon_id} value={room.hackathon_id}>
                    {room.name}
                  </MenuItem>
                ))} */}
              </Select>
            </FormControl>
            <FormControl variant="outlined" sx={{ mt: 3 }} fullWidth>
              <InputLabel id="count-label">募集人数</InputLabel>
              <Select
                {...register('selectedCount')}
                labelId="count-label"
                id="count-select"
                label="募集人数"
              >
                {Array.from({ length: 4 }, (_, i) => i + 1).map((count) => (
                  <MenuItem key={count} value={count}>
                    {count}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              {...register('text', { maxLength: 140, minLength: 1 })}
              multiline
              rows={4}
              variant="outlined"
              id="Content"
              placeholder="チーム説明"
              sx={{ mt: 3 }}
              fullWidth
            />
            <Box textAlign={'right'} sx={{ mt: 1 }}>
              <Typography color={errors.text ? 'error' : 'initial'}>
                {text.length}/140
              </Typography>
              <Button
                sx={{ mt: 1, mr: 0.5 }}
                type="submit"
                variant="contained"
                color="primary"
              >
                投稿
              </Button>
            </Box>
          </Box>
        </form>
      </Modal>
    </Box>
  )
}
