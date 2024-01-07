'use client'
import { Box } from '@mui/material'
import React from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {
  name: string
  label: string
}

const ImgUpload: React.FC<Props> = ({ name, label }) => {
  const { register } = useFormContext()

  return (
    <Box>
      <input
        type="file"
        style={{
          width: '100%',
          margin: 2,
        }}
        id={name}
        {...register(name)}
      />
    </Box>
  )
}

export default ImgUpload
