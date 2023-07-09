import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useState } from 'react'
import { Container, Typography } from '@mui/joy'
import For
export const LoginForm = () => {
  return (
    <>
      <Container maxWidth="sm" sx={{ height: '100vh' }}>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          noValidate
        >
          <Typography sx={{ mt: 6, mb: 5 }}>アイコンとか入れる</Typography>
          <TextField
            sx={{ width: '400px' }}
            id="username"
            label="お名前"
            name="username"
            disabled={false}
            required
          />
          <TextField
            sx={{ width: '400px' }}
            margin="normal"
            id="password"
            label="パスワード"
            name="password"
            type="password"
            disabled={false}
            required
          />
          <Button
            sx={{ mt: 3, mb: 2, width: '200px' }}
            variant="outlined"
            color="primary"
            type="submit"
          >
            ログイン
          </Button>
        </Box>
      </Container>
    </>
  )
}
