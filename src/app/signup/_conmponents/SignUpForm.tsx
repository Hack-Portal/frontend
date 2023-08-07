import { Db_Locates } from '@/api/@types'
import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@/lib/mui/muiRendering'
import { User } from 'firebase/auth'
import { Controller, Control, FieldValues, UseFormHandleSubmit } from 'react-hook-form'

type Props = {
  control: Control<FieldValues, any>
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>
  handleSetIcon: (file: Blob | null) => void
  preview: string | null
  locates: Db_Locates[]
  user:User|null
}

export const SignUpForm = (props: Props) => {
  const { control, handleSubmit, handleSetIcon, preview, locates } = props

  return (
    <>
      <Box component="form" onSubmit={handleSubmit(()=>{})}>
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
              <Avatar src={preview!} />
            </InputLabel>
          )}
        />
        <Controller
          name="username"
          control={control}
          rules={{
            required: { value: true, message: '必須入力' },
          }}
          render={({ field, formState: { errors } }) => (
            <TextField
              {...field}
              label="名前"
              fullWidth
              placeholder="名前を入力してください"
              error={errors.text ? true : false}
              helperText={errors.text?.message as string}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{
            required: { value: true, message: '必須入力' },
          }}
          render={({ field, formState: { errors } }) => (
            <TextField
              {...field}
              label="Eメール"
              fullWidth
              placeholder="名前を入力してください"
              error={errors.text ? true : false}
              helperText={errors.text?.message as string}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: { value: true, message: '必須入力' },
          }}
          render={({ field, formState: { errors } }) => (
            <TextField
              {...field}
              label="パスワード"
              fullWidth
              placeholder="名前を入力してください"
              error={errors.text ? true : false}
              helperText={errors.text?.message as string}
              type='password'
            />
          )}
        />
        <Controller
          name="locate"
          control={control}
          rules={{
            required: { value: true, message: '必須入力' },
          }}
          render={({ field, formState: { errors } }) => (
            <Controller
              name="select"
              control={control}
              defaultValue={0}
              render={({ field, formState: { errors } }) => (
                <FormControl fullWidth error={errors.select ? true : false}>
                  <InputLabel id="select-label">居住地</InputLabel>
                  <Select
                    labelId="select-label"
                    id="select"
                    label="Select"
                    {...field}
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
