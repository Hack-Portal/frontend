'use client'
import { Domain_HackathonResponses, Domain_UpdateRoomRequestBody } from '@/api/@types'
import { PostRoom } from '@/app/room/_types/postroom'
import {
  Box,
  Button,
  Modal,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@/lib/mui/muiRendering'
import { useForm } from 'react-hook-form'

type Props = {
  isOpen: boolean
  room_id?: string
  hackathons?: Domain_HackathonResponses[]
  handleClose: () => void
  handleUpdateRoom: (roomInfo: Domain_UpdateRoomRequestBody) => Promise<void>
}

export const UpdateModalWindow = (props: Props) => {
  const { isOpen, hackathons,room_id,handleClose, handleUpdateRoom } = props

  // todo:logicを分離する
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<PostRoom>({
    defaultValues: {
      title: '',
      hackathon_id: 0,
      member_limit: 0,
      description: '',
    },
  })

  const text = watch('description')

  const onSubmit = async(data: PostRoom) => {
    // createRoom(data)
    const roomInfo: Domain_UpdateRoomRequestBody = {
      title: data.title,
      hackathonID: data.hackathon_id,
      member_limit: data.member_limit,
      description: data.description,
      is_closing: false,
    }
    try{
      await handleUpdateRoom(roomInfo)
      handleClose()
    }catch(e){
      console.log(e)
    }
  }

  return (
    <Box>
      <Modal
        open={isOpen}
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
              {...register('title', { maxLength: 40, minLength: 1 })}
              label="チーム名"
              variant="outlined"
              sx={{ mt: 3 }}
              fullWidth
              inputProps={{ height: '50px' }}
            />
            <FormControl variant="outlined" sx={{ mt: 3 }} fullWidth>
              <InputLabel id="hackathon-label">ハッカソン選択</InputLabel>
              <Select
                {...register('hackathon_id')}
                labelId="hackathon-label"
                id="hackathon-select"
                label="ハッカソン選択"
              >
                {hackathons?.map((hackathon) => (
                  <MenuItem
                    key={hackathon.hackathon_id}
                    value={hackathon.hackathon_id}
                  >
                    {hackathon.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl variant="outlined" sx={{ mt: 3 }} fullWidth>
              <InputLabel id="count-label">募集人数</InputLabel>
              <Select
                {...register('member_limit')}
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
              {...register('description', { maxLength: 140, minLength: 1 })}
              multiline
              rows={4}
              variant="outlined"
              id="Content"
              placeholder="チーム説明"
              sx={{ mt: 3 }}
              fullWidth
            />
            <Box textAlign={'right'} sx={{ mt: 1 }}>
              <Typography color={errors.description ? 'error' : 'initial'}>
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
  return
}
