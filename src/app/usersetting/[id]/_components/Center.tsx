'use client'
import React, { useEffect } from 'react'
import { Controller, set, useForm } from 'react-hook-form'
import {
  Avatar,
  Box,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  Button,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@/lib/mui/muiRendering'
import { Domain_AccountResponses, Domain_FollowResponse } from '@/api/@types'
import { ProfileFormData } from '../types/formData'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}
type Props = {
  updateUser: any
  Userinfo: any
}

export const Center = (props: Props) => {
  const { updateUser, Userinfo } = props

  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      username: Userinfo?.username,
      icon: Userinfo?.icon,
      locate: Userinfo?.locate.id,
      tech_tags: Userinfo?.tech_tags || [],
      frameworks: Userinfo?.frameworks || [],
      email: Userinfo?.email,
      Twitter: Userinfo?.twitter_link,
      Github: Userinfo?.github_link,
      Discord: Userinfo?.discord_link,
    },
  })
  const [locate, setLocate] = React.useState<any>(Userinfo?.locate)

  const changeTech = (event: SelectChangeEvent<string[]>) => {
    const { value } = event.target
    setValue('tech_tags', typeof value === 'string' ? value.split(',') : value)
  }

  const changeFramework = (event: SelectChangeEvent<string[]>) => {
    const { value } = event.target
    setValue('frameworks', typeof value === 'string' ? value.split(',') : value)
  }
  useEffect(() => {
    if (Userinfo?.locate) {
      setLocate(Userinfo?.locate)
    }
  }, [setLocate, Userinfo?.locate])

  const onSubmit = async (data: any) => {
    try {
      const updatedUser = await updateUser.update(data)
      console.log('ユーザーが更新されました:', updatedUser)
    } catch (error) {
      console.log(data)
      console.error('ユーザーの更新に失敗しました:', error)
    }
  }

  const Locate = [
    {
      id: 1,
      label: '北海道',
    },
    {
      id: 2,
      label: '青森県',
    },
    {
      id: 3,
      label: '岩手県',
    },
    {
      id: 4,
      label: '宮城県',
    },
    {
      id: 5,
      label: '秋田県',
    },
    {
      id: 6,
      label: '山形県',
    },
    {
      id: 7,
      label: '福島県',
    },
    {
      id: 8,
      label: '茨城県',
    },
    {
      id: 9,
      label: '栃木県',
    },
    {
      id: 10,
      label: '群馬県',
    },
    {
      id: 11,
      label: '埼玉県',
    },
    {
      id: 12,
      label: '千葉県',
    },
    {
      id: 13,
      label: '東京都',
    },
    {
      id: 14,
      label: '神奈川県',
    },
    {
      id: 15,
      label: '新潟県',
    },
  ]
  const TechList = [
    { tech_tag_id: 1, language: 'Python' },
    { tech_tag_id: 2, language: 'JavaScript' },
    { tech_tag_id: 3, language: 'Java' },
    { tech_tag_id: 4, language: 'Go' },
    { tech_tag_id: 5, language: 'C' },
    { tech_tag_id: 6, language: 'Csharp' },
    { tech_tag_id: 7, language: 'Cpp' },
  ]

  const frameworkList = [
    { framework_id: 1, tech_tag_id: 1, framework: 'Django' },
    { framework_id: 2, tech_tag_id: 1, framework: 'Flask' },
    { framework_id: 3, tech_tag_id: 1, framework: 'FastAPI' },
    { framework_id: 4, tech_tag_id: 2, framework: 'React.js' },
    { framework_id: 5, tech_tag_id: 2, framework: 'Vue.js' },
    { framework_id: 6, tech_tag_id: 2, framework: 'Three.js' },
    { framework_id: 7, tech_tag_id: 2, framework: 'Next.js' },
    { framework_id: 8, tech_tag_id: 2, framework: 'Node.js' },
    { framework_id: 9, tech_tag_id: 2, framework: 'Angular' },
    { framework_id: 10, tech_tag_id: 3, framework: 'JavaPlayFramework' },
    { framework_id: 11, tech_tag_id: 3, framework: 'Spring' },
    { framework_id: 12, tech_tag_id: 3, framework: 'ApacheStruts' },
    { framework_id: 13, tech_tag_id: 3, framework: 'JSF' },
    { framework_id: 14, tech_tag_id: 3, framework: 'Wicket' },
  ]
  return (
    <Grid
      display="flex"
      sx={{ width: '500px', mt: 12, ml: 2 }}
      component="form"
      onSubmit={handleSubmit((data) => onSubmit(data))}
      direction={'column'}
    >
      <Grid display={'row'} flexDirection={'column'}>
        {/* 名前 */}
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <TextField {...field} fullWidth sx={{ width: '70%', mb: 4 }} />
          )}
        />
        {/* 都道府県 */}
        <Controller
          defaultValue={Userinfo?.locate}
          name="locate"
          control={control}
          render={({ field: { onChange, value } }) => {
            const handleChange: (event: any) => void = (event) => {
              onChange(event)
              setLocate(null)
              console.log(event.target.value)

              // react-hook-formのonChangeハンドラにイベントを渡す
            }
            return (
              <FormControl sx={{ width: 200 }}>
                <InputLabel shrink={false}>{locate ? locate : null}</InputLabel>
                <Select
                  id="select"
                  onChange={handleChange} // 修正されたハンドラを使用
                  sx={{ width: '100%', mb: 4 }}
                >
                  {Locate &&
                    Locate.map((locate) => (
                      <MenuItem value={locate.id} key={locate.label}>
                        {locate.label}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            )
          }}
        />
        <Controller
          name="tech_tags"
          control={control}
          render={({ field }) => (
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-chip-label">言語</InputLabel>
              <Select
                multiple
                {...field}
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                onChange={changeTech}
                input={<OutlinedInput id="select-multiple-chip" label="言語" />}
                MenuProps={MenuProps}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {Array.isArray(selected) ? (
                      selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))
                    ) : (
                      <></>
                    )}
                  </Box>
                )}
              >
                {TechList.map((tech) => (
                  <MenuItem key={tech.tech_tag_id} value={tech.language}>
                    {tech.language}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />

        <Controller
          name="frameworks"
          control={control}
          render={({ field }) => (
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-chip-label">
                フレームワーク
              </InputLabel>
              <Select
                {...field}
                multiple
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                onChange={changeFramework}
                input={
                  <OutlinedInput
                    id="select-multiple-chip"
                    label="フレームワーク"
                  />
                }
                MenuProps={MenuProps}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {Array.isArray(selected) ? (
                      selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))
                    ) : (
                      <></>
                    )}
                  </Box>
                )}
              >
                {frameworkList.map((framework) => (
                  <MenuItem
                    key={framework.framework_id}
                    value={framework.framework}
                  >
                    {framework.framework}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />
      </Grid>

      {/* address */}
      <Grid>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              defaultValue={Userinfo?.email || ''}
              {...field}
              fullWidth
              label="メールアドレス"
              sx={{ width: '70%', mb: 4 }}
            />
          )}
        />

        <Controller
          name="Twitter"
          control={control}
          render={({ field }) => (
            <TextField
              defaultValue={Userinfo?.twitter_link || ''}
              {...field}
              fullWidth
              label="Twitter"
              sx={{ width: '70%', mb: 4 }}
            />
          )}
        />
        <Controller
          name="Github"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              defaultValue={Userinfo?.github_link || ''}
              fullWidth
              label="Github"
              sx={{ width: '70%', mb: 4 }}
            />
          )}
        />

        <Controller
          name="Discord"
          control={control}
          render={({ field }) => (
            <TextField
              defaultValue={Userinfo?.discord_link || ''}
              {...field}
              fullWidth
              label="Discord"
              sx={{ width: '70%', mb: 4 }}
            />
          )}
        />
      </Grid>
      <Button type="submit">更新</Button>
    </Grid>
  )
}
