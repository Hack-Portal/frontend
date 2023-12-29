'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Chip from '@mui/material/Chip'
import { useFormContext } from 'react-hook-form'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}
const tags = ['オンライン', 'オフライン', '初心者歓迎']

type SelectProps = {
  name: string
}

const HackathonStatusSelector: React.FC<SelectProps> = ({ name }) => {
  const { register, watch, setValue } = useFormContext()

  const watchValue = watch()

  React.useEffect(() => {
    setValue(name, watchValue)
    register(...watchValue)
    // watchValueが変更されたらsetValueを実行する
    console.log(watchValue)
  }, [watchValue, setValue, register])

  const handleChange = (event: SelectChangeEvent<typeof watchValue>) => {
    const {
      target: { value },
    } = event
    setValue(name, typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <Box>
      <Select
        sx={{
          width: '100%',
          my: 2,
        }}
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        value={Array.isArray(watchValue) ? watchValue : []}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        renderValue={(selected: (string | number)[]) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value: string | number) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {tags.map((value, index) => (
          <MenuItem key={index} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </Box>
  )
}

export default HackathonStatusSelector
