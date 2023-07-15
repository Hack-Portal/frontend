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

interface HackathonType {
  id: number
  name: string
  limit: number
}

// const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function ModalWindow() {
  // const { roomList, error } = useSWR<HackathonType[]>('/api/hackathons', fetcher)

  const [selectedHackathon, setSelectedHackathon] =
    useState<HackathonType | null>(null)
  const [selectedCount, setSelectedCount] = useState<number | null>(null)

  const [open, setOpen] = useState<boolean>(false)
  const [text, setText] = useState<string>('')
  const [teamName, setTeamName] = useState<string>('')

  const [select1, setSelect1] = useState<HackathonType | null>(null)

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
      (room) => room.hackathon.id === event.target.value,
    )
    setSelectedHackathon(room ? room.hackathon : null)
    setSelectedCount(null)
  }

  const handleSelectCountChange = (event: SelectChangeEvent<number>) => {
    setSelectedCount(parseInt(event.target.value as string, 10)) // ensure the event value is a number
  }

  const roomList: any = [
    {
      id: 'room1',
      title: 'Awesome Hack Room 1',
      member_limit: 5,
      hackathon: {
        id: '1',
        name: '【技育CAMP】マンスリーハッカソン vol.8',
        icon: 'image/hackathon1.png',
      },
      now_member: [
        {
          id: 'user1',
          name: 'User 1',
          icon: 'image/user1.png',
        },
        {
          id: 'user2',
          name: 'User 2',
          icon: 'image/user2.png',
        },
      ],
      techs: [
        {
          id: 1,
          name: 'Python',
        },
        {
          id: 2,
          name: 'JavaScript',
        },
      ],
      frameworks: [
        {
          id: 1,
          name: 'Django',
        },
        {
          id: 2,
          name: 'React',
        },
      ],
    },
    {
      id: 'room2',
      title: 'Diverse Coders United',
      member_limit: 4,
      hackathon: {
        id: '2',
        name: '【技育CAMP】マンスリーハッカソン vol.6',
        icon: 'image/hackathon2.png',
      },
      now_member: [
        {
          id: 'user3',
          name: 'User 3',
          icon: 'image/user3.png',
        },
        {
          id: 'user4',
          name: 'User 4',
          icon: 'image/user4.png',
        },
      ],
      techs: [
        {
          id: 3,
          name: 'Java',
        },
        {
          id: 4,
          name: 'C#',
        },
      ],
      frameworks: [
        {
          id: 3,
          name: 'Spring',
        },
        {
          id: 4,
          name: '.NET',
        },
      ],
    },
    {
      id: 'room3',
      title: 'NextGen UI/UX Designers',
      member_limit: 3,
      hackathon: {
        id: '3',
        name: '【技育CAMP】マンスリーハッカソン vol.7',
        icon: 'image/hackathon3.png',
      },
      now_member: [
        {
          id: 'user5',
          name: 'User 5',
          icon: 'image/user5.png',
        },
      ],
      techs: [
        {
          id: 5,
          name: 'CSS',
        },
      ],
      frameworks: [
        {
          id: 5,
          name: 'Bootstrap',
        },
      ],
    },
    {
      id: 'room4',
      title: 'Blockchain Innovators',
      member_limit: 4,
      hackathon: {
        id: '4',
        name: '【金沢開催】技育CAMPハッカソン【全国を巡る "キャラバン" ハッカソン】',
        icon: 'image/hackathon4.png',
      },
      now_member: [
        {
          id: 'user6',
          name: 'User 6',
          icon: 'image/user6.png',
        },
        {
          id: 'user7',
          name: 'User 7',
          icon: 'image/user7.png',
        },
      ],
      techs: [
        {
          id: 6,
          name: 'Solidity',
        },
      ],
      frameworks: [
        {
          id: 6,
          name: 'Truffle',
        },
      ],
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
              value={selectedHackathon?.id.toString() || ''}
              onChange={handleSelectHackathonChange}
              label="ハッカソン選択"
            >
              {roomList.map((room) => (
                <MenuItem key={room.hackathon.id} value={room.hackathon.id}>
                  {room.hackathon.name}
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
              onClick={handleClose}
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
