'use client'
import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@/lib/mui/muiRendering'
import { User } from 'firebase/auth'
import {
  Controller,
  Control,
  FieldValues,
  UseFormHandleSubmit,
  SubmitHandler,
} from 'react-hook-form'
import { SignUpFormData } from '../types/formData'
import { ChangeEvent, FormEventHandler, ReactNode } from 'react'
import { Repository_Locate } from '@/api/@types'

type Props = {
  control: Control<SignUpFormData, any>
  handleSubmit: FormEventHandler<HTMLFormElement>
  handleSetIcon: (file: Blob | null) => void
  preview: string | null
  locates: Repository_Locate[]
  user: User | null
}

export const SignUpForm = (props: Props) => {
  const { control, handleSubmit, handleSetIcon, preview, locates } = props

  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
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
        <Controller
          name="username"
          control={control}
          defaultValue=""
          rules={{
            required: { value: true, message: '必須入力' },
          }}
          render={({ field, formState: { errors } }) => (
            <TextField
              {...field}
              label="名前"
              fullWidth
              placeholder="名前を入力してください"
              error={errors.username ? true : false}
              helperText={errors.username?.message as string}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: { value: true, message: '必須入力' },
          }}
          render={({ field, formState: { errors } }) => (
            <TextField
              {...field}
              label="Eメール"
              fullWidth
              placeholder="名前を入力してください"
              error={errors.email ? true : false}
              helperText={errors.email?.message as string}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: { value: true, message: '必須入力' },
          }}
          render={({ field, formState: { errors } }) => (
            <TextField
              {...field}
              label="パスワード"
              fullWidth
              placeholder="名前を入力してください"
              error={errors.password ? true : false}
              helperText={errors.password?.message as string}
              type="password"
            />
          )}
        />
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
                  <InputLabel id="select-label">居住地</InputLabel>
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
      </Box>
    </>
  )
}
