'use client'
import { Box } from '@mui/material'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@mui/material'

type Props = {
  name: string
  label: string
}

const tags = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'] // 選択可能なタグのリスト

const TagSelect: React.FC<Props> = ({ name, label }) => {
  const { register, watch } = useFormContext()
  const selectedTags = watch(name) //watchはフォームの値を監視する

  return (
    <Box>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select
        labelId={`${name}-label`}
        id={name}
        multiple
        value={selectedTags || []}
        onChange={(e) => register(name).onChange(e)}
        input={<OutlinedInput label={label} />}
      >
        {tags.map((tag) => (
          <MenuItem key={tag} value={tag}>
            {tag}
          </MenuItem>
        ))}
      </Select>
    </Box>
  )
}

export default TagSelect
