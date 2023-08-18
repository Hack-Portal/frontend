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
  handleSetIcon: (file: Blob | null) => void
  preview: string | null
  locates: Repository_Locate[]
  user?: User
}

export const SignUpDetailForm = (props: Props) => {
  const { createUser, handleSetIcon, preview, locates, user } = props
  const { control, handleSubmit } = useForm<SignUpFormData>() // 使用したいメソッド等

  return (
    <Grid
      sx={{ width: '100%', height: '100%' }}
      component="form"
      onSubmit={handleSubmit(createUser)}
    >
      <Controller
        name="icon"
        control={control}
        defaultValue=""
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
            <Avatar src={preview!} />
          </InputLabel>
        )}
      />
      <Typography>名前</Typography>
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
            placeholder="名前を入力してください"
            error={errors.username ? true : false}
            helperText={errors.username?.message as string}
          />
        )}
      />
      <Typography>居住地</Typography>
      <Controller
        name="locate_id"
        control={control}
        rules={{
          required: { value: true, message: '必須入力' },
        }}
        render={({ field, formState: { errors } }) => (
          <Controller
            name="locate_id"
            control={control}
            defaultValue={0}
            render={({ field, formState: { errors } }) => (
              <FormControl fullWidth error={errors.locate_id ? true : false}>
                <Controller
                  name="locate_id"
                  control={control}
                  render={({
                    field: { onChange, value, onBlur, name, ref },
                  }) => {
                    const handleChange: (event: any) => void = (event) => {
                      onChange(event) // react-hook-formのonChangeハンドラにイベントを渡す
                    }
                    return (
                      <Select
                        labelId="select-label"
                        id="select"
                        label="Select"
                        inputRef={ref}
                        onChange={handleChange} // 修正されたハンドラを使用
                        value={value}
                        onBlur={onBlur}
                      >
                        <MenuItem value={0}>未選択</MenuItem>
                        {locates &&
                          locates.map((locate) => (
                            <MenuItem
                              value={locate.locate_id}
                              key={locate.locate_id}
                            >
                              {locate.name}
                            </MenuItem>
                          ))}
                      </Select>
                    )
                  }}
                />
                <Button type="submit">登録</Button>
              </FormControl>
            )}
          />
        )}
      />
    </Grid>
  )
}
