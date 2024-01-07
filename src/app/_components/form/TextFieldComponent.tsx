'use client'
import { Box } from '@mui/material'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import { Typography } from '@mui/joy'

type TextFieldProps = {
  name: string
  label: string
  validationRules?: any
}

const TextFieldComponent: React.FC<TextFieldProps> = ({
  name,
  label,
  validationRules,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const errorMessage = errors[name]?.message

  return (
    <Box>
      <TextField
        sx={{
          width: '100%',
          my: 2,
        }}
        error={!!errorMessage}
        id={name}
        label={label}
        {...register(name, validationRules)}
      />
      {errorMessage && (
        <Typography sx={{ color: 'red' }}>{errorMessage.toString()}</Typography>
      )}
    </Box>
  )
}

export default TextFieldComponent
