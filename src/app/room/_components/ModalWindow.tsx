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

interface HackathonType {
  id: number
  name: string
  limit: number
}

const hackathons: HackathonType[] = [
  {
    id: 1,
    name: 'ハッカソン1',
    limit: 5,
  },
  {
    id: 2,
    name: 'ハッカソン2',
    limit: 3,
  },
  {
    id: 3,
    name: 'ハッカソン3',
    limit: 4,
  },
  {
    id: 4,
    name: 'ハッカソン4',
    limit: 5,
  },
]
export default function ModalWindow() {
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
  const handleSelectHackathonChange = (event: SelectChangeEvent<string>) => {
    const hackathon = hackathons.find(
      (hack) => hack.id === Number(event.target.value),
    )
    setSelectedHackathon(hackathon || null)
    setSelectedCount(null)
  }

  const handleSelectCountChange = (event: SelectChangeEvent<string>) => {
    setSelectedCount(Number(event.target.value) || null)
  }

  useEffect(() => {
    if (text.length > 140) {
    }
  }, [text])

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
          <Typography variant='h6'>メンバーを募集する</Typography>
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
              {hackathons.map((hackathon) => (
                <MenuItem key={hackathon.id} value={hackathon.id}>
                  {hackathon.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {selectedHackathon && (
            <FormControl variant="outlined" sx={{ mt: 3 }} fullWidth>
              <InputLabel id="count-label">募集人数</InputLabel>
              <Select
                labelId="count-label"
                id="count-select"
                value={selectedCount?.toString() || ''}
                onChange={handleSelectCountChange}
                label="募集人数"
              >
                {Array.from(
                  { length: selectedHackathon.limit - 1 },
                  (_, i) => i + 1,
                ).map((count) => (
                  <MenuItem key={count} value={count}>
                    {count}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
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
