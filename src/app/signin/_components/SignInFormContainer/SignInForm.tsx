import { Db_Locates, Db_TechTags, Db_Frameworks } from '@/api/@types'
import {
  Avatar,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@/lib/mui/muiRendering'
import { User } from 'firebase/auth'
import React, { ChangeEvent, Suspense, useEffect } from 'react'
import {
  useForm,
  Controller,
  Control,
  FieldValues,
  UseFormHandleSubmit,
} from 'react-hook-form'

type Props = {
  control: Control<FieldValues, any>
  handleSubmit: any
  user: User | null
  isLoading: boolean
  handleSetIcon: (file: Blob | null) => void
  preview: string | null
  locates: Db_Locates[]
  techTags: Db_TechTags[]
  frameworks: Db_Frameworks[]
}

export const SignInForm = (props: Props) => {
  const {
    control,
    handleSubmit,
    user,
    isLoading,
    handleSetIcon,
    preview,
    locates,
    techTags,
    frameworks,
  } = props

  return (
    <>
      {isLoading || (
        <Box component="form" onSubmit={handleSubmit}>
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
            defaultValue={user?.displayName}
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
            name="locate"
            control={control}
            defaultValue={user?.email}
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
                  </FormControl>
                )}
              />
            )}
          />
          <Controller
            name="check"
            control={control}
            defaultValue={true}
            render={({ field, formState: { errors } }) => (
              <FormGroup {...field}>
                <FormLabel component="legend">技術</FormLabel>

                <Grid container>
                  {techTags[0] &&
                    techTags.map((techTag) => (
                      <FormControlLabel
                        control={<Checkbox name="check" />}
                        label={techTag.language}
                        value={techTag.tech_tag_id}
                        key={techTag.tech_tag_id}
                      />
                    ))}
                </Grid>
              </FormGroup>
            )}
          />
        </Box>
      )}
    </>
  )
}
