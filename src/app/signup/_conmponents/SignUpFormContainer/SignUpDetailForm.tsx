'use client'
import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  TextField,
  Grid,
} from '@/lib/mui/muiRendering'
import { User } from 'firebase/auth'
import { Controller, useForm } from 'react-hook-form'
import { SignUpFormData } from '../../types/formData'
import { Repository_Locate } from '@/api/@types'

type Props = {
  createUser: (data: SignUpFormData) => void
  handleSetIcon: (file: File | null) => void
  preview: string | null
  locates: Repository_Locate[]
  user?: User
}

export const SignUpDetailForm = (props: Props) => {
  const { createUser, handleSetIcon, preview, locates, user } = props
  const { control, handleSubmit } = useForm<SignUpFormData>() // 使用したいメソッド等

  return (
    <Grid
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      component="form"
      onSubmit={handleSubmit(createUser)}
      direction={'column'}
    >
      <Controller
        name="icon"
        control={control}
        render={({ field }) => (
          <InputLabel>
            <TextField
              {...field}
              type="file"
              onChange={(e: any) => {
                handleSetIcon(e.currentTarget.files![0])
              }}
              sx={{ display: 'none' }}
            />
            <Avatar
              src={preview!}
              sx={{ width: '60px', height: '60px', mb: 5 }}
            />
          </InputLabel>
        )}
      />

      <Controller
        name="username"
        control={control}
        defaultValue={user?.displayName || ''}
        rules={{
          required: { value: true, message: '必須入力' },
        }}
        render={({ field, formState: { errors } }) => (
          <TextField
            {...field}
            fullWidth
            label="名前"
            error={errors.username ? true : false}
            helperText={errors.username?.message as string}
            sx={{ width: '70%', mb: 4 }}
          />
        )}
      />
      <FormControl sx={{ width: '70%' }}>
        <Controller
          defaultValue={0}
          name="locate_id"
          control={control}
          render={({ field: { onChange, value, onBlur, name, ref } }) => {
            const handleChange: (event: any) => void = (event) => {
              onChange(event) // react-hook-formのonChangeハンドラにイベントを渡す
            }
            return (
              <Select
                labelId="select-label"
                id="select"
                inputRef={ref}
                onChange={handleChange} // 修正されたハンドラを使用
                value={value}
                onBlur={onBlur}
                sx={{ width: '100%', mb: 4 }}
              >
                <MenuItem value={0}>
                  <Typography sx={{color:"#777"}}>居住地を選択</Typography>
                </MenuItem>
                {locates &&
                  locates.map((locate) => (
                    <MenuItem value={locate.locate_id} key={locate.locate_id}>
                      {locate.name}
                    </MenuItem>
                  ))}
              </Select>
            )
          }}
        />
        <Button type="submit" sx={{ width: '100%' }} variant="contained">登録</Button>
      </FormControl>
    </Grid>
  )
}
