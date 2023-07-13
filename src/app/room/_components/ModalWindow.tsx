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

export default function ModalWindow() {
  const [open, setOpen] = useState<boolean>(false)
  const [text, setText] = useState<string>('')
  const [teamName, setTeamName] = useState<string>('')

  const [select1, setSelect1] = useState<string[]>([])
  const [select2, setSelect2] = useState<string[]>([])

  //モーダル開閉
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setText('')
    setTeamName('')
    setSelect1([])
    setSelect2([])
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
            border: '2px solid #000',
            boxShadow: 24,
            pt: 2,
            px: 4,
            pb: 3,
            width: 650,
            height: 400,
          }}
        >
          <TextField
            label="チーム名"
            variant="outlined"
            value={teamName}
            onChange={handleChange(setTeamName)} // ここではhandleChangeを使います
            fullWidth
            inputProps={{ maxLength: 40, minLength: 1, height: '50px' }}
          />
          <Box sx={{ display: 'flex', gap: 3 }}>
            {[select1, select2].map((select, i) => (
              <FormControl
                key={i}
                sx={{ height: 70, mb: 3, width: '100%', minWidth: 200 }}
              >
                <Typography sx={{ size: '5px' }} color="initial">
                  SelectStack
                </Typography>
                <Select
                  labelId={`ChipLabel-${i}`}
                  id={`Chip${i}`}
                  multiple
                  value={select}
                  onChange={handleSelectChange(
                    i === 0 ? setSelect1 : setSelect2,
                  )}
                  input={<OutlinedInput id={`SelectChip-${i}`} />}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  {['Option 1', 'Option 2', 'Option 3'].map((option) => (
                    <MenuItem
                      key={option}
                      value={option.toLowerCase().replace(' ', '')}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ))}
          </Box>
          <TextField
            multiline
            rows={4}
            variant="outlined"
            value={text}
            onChange={handleChange(setText)}
            id="Content"
            placeholder="チーム説明"
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
