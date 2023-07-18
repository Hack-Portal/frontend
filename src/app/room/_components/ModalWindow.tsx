import { useState, ChangeEvent, useEffect } from 'react'
import {
  Box,
  Modal,
  Button,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  Chip,
  Select,
  MenuItem,
} from '@mui/material'
import { SelectChangeEvent } from '@mui/material'
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded'
import useSWR from 'swr'
import { RoomThumb } from '../types/room'
import { PostModal } from './types/modal'

// const fetcher = (url: string) => fetch(url).then((res) => res.json())
type Props = {
  handleCreateRoom: (teamName: string, selectedCount: number) => void
}
export const ModalWindow = (props: Props) => {
  const { handleCreateRoom } = props
  const handleCreateRoomClick = () => {
    handleCreateRoom(teamName, selectedCount)
    handleClose()
  }
  // const { roomList, error } = useSWR<HackathonType[]>('/api/hackathons', fetcher)

  const [selectedHackathon, setSelectedHackathon] = useState<PostModal | null>(
    null,
  )
  const [selectedCount, setSelectedCount] = useState<number>(0)

  const [open, setOpen] = useState<boolean>(false)
  const [text, setText] = useState<string>('')
  const [teamName, setTeamName] = useState<string>('')

  const [select1, setSelect1] = useState<PostModal | null>(null)

  //モーダル開閉
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setText('')
    setTeamName('')
    setSelect1(null)
  }

  useEffect(() => {
    if (text.length > 140) {
    }
  }, [text])

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value)
    }

  const handleSelectChange =
    (setter: React.Dispatch<React.SetStateAction<string[]>>) =>
    (event: SelectChangeEvent<string[]>) => {
      setter(event.target.value as string[])
    }

  // if (roomList === undefined) return <div>loading...</div>

  const handleSelectHackathonChange = (event: SelectChangeEvent<string>) => {
    const room = roomList.find(
      (room) => String(room.hackathon_id) == event.target.value,
    )

    setSelectedHackathon(room!)
    setSelectedCount(0)
  }

  const handleSelectCountChange = (event: SelectChangeEvent<number>) => {
    setSelectedCount(parseInt(event.target.value as string, 10)) // ensure the event value is a number
  }

  const roomList: PostModal[] = [
    {
      hackathon_id: 1,
      name: '【技育CAMP】マンスリーハッカソン vol.8',
    },
    {
      hackathon_id: 2,
      name: '【技育CAMP】マンスリーハッカソン vol.8',
    },
    {
      hackathon_id: 3,
      name: '【技育CAMP】マンスリーハッカソン vol.7',
    },
    {
      hackathon_id: 4,
      name: '【金沢開催】技育CAMPハッカソン【全国を巡る "キャラバン" ハッカソン】',
    },
  ]

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
            label="チーム名"
            variant="outlined"
            value={teamName}
            onChange={handleChange(setTeamName)}
            sx={{ mt: 3 }}
            fullWidth
            inputProps={{ maxLength: 40, minLength: 1, height: '50px' }}
          />
          <FormControl variant="outlined" sx={{ mt: 3 }} fullWidth>
            <InputLabel id="hackathon-label">ハッカソン選択</InputLabel>
            <Select
              labelId="hackathon-label"
              id="hackathon-select"
              value={selectedHackathon?.hackathon_id.toString() || ''}
              onChange={handleSelectHackathonChange}
              label={selectedHackathon?.name || 'ハッカソン選択'}
            >
              {roomList.map((room) => (
                <MenuItem key={room.hackathon_id} value={room.hackathon_id}>
                  {room.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="outlined" sx={{ mt: 3 }} fullWidth>
            <InputLabel id="count-label">募集人数</InputLabel>
            <Select
              labelId="count-label"
              id="count-select"
              value={selectedCount || ''} // if selectedCount is null, it will display an empty string
              onChange={handleSelectCountChange}
              label="募集人数"
            >
              {Array.from(
                { length: 4 }, // Set this to 4 for 1 to 4
                (_, i) => i + 1,
              ).map((count) => (
                <MenuItem key={count} value={count}>
                  {count}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            multiline
            rows={4}
            variant="outlined"
            value={text}
            onChange={handleChange(setText)}
            id="Content"
            placeholder="チーム説明"
            sx={{ mt: 3 }}
            fullWidth
          />
          <Box textAlign={'right'} sx={{ mt: 1 }}>
            <Typography color={text.length > 140 ? 'error' : 'initial'}>
              {text.length}/140
            </Typography>
            <Button
              sx={{ mt: 1, mr: 0.5 }}
              disabled={text.length > 140 || text.length === 0}
              onClick={() => {
                handleCreateRoomClick()
              }}
              variant="contained"
              color="primary"
            >
              投稿
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}
