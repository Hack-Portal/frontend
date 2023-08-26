import { IconButton,Box, TextField } from '@/lib/mui/muiRendering'
import React, { FormEventHandler } from 'react'
import SendIcon from '@mui/icons-material/Send'
import { Control, Controller } from 'react-hook-form'
import { ChatFormData } from '../../types/ChatFormData'

type Props ={
  control:Control<ChatFormData, any>
  handleSubmit: FormEventHandler<HTMLFormElement>
}

export const SendInputArea= (props:Props) => {
  const {handleSubmit,control} = props

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '0px',
        padding: '10px 0 10px 0',
        width: 796,
        display: 'flex',
        background: '#fff',
        justifyContent: 'center',
      }}
      component={'form'}
      onSubmit={handleSubmit}
    >
        <Controller
          name="message"
          control={control}
          defaultValue=""
          render={({ field }) => (
              <TextField
                {...field}
                placeholder="Type in here…"
                sx={{
                  width: '90%',
                  fontSize: '1rem',
                }}
              />
          )}
        />
      <IconButton
        type="submit"
        sx={{ p: '10px' }}
        aria-label="search"
      >
        <SendIcon color="primary" />
      </IconButton>
    </Box>
  )
}
