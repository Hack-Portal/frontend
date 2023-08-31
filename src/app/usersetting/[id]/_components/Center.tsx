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
  handleSetIcon: (file: File | null) => void
  preview: string | null
}

export const Center = (props: Props) => {
  const { updateUser, Userinfo, handleSetIcon, preview } = props

  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      username: Userinfo?.username,
      icon: Userinfo?.icon || '',
      explantory_text: Userinfo?.explantory_text,
      locate: Userinfo?.locate.id,
      tech_tags: Userinfo?.tech_tags || [],
      frameworks: Userinfo?.frameworks || [],
      email: Userinfo?.email,
      twitter_link: Userinfo?.twitter_link,
      github_link: Userinfo?.github_link,
      discord_link: Userinfo?.discord_link,
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

  const onSubmit = async (data: ProfileFormData) => {
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
    {
      tech_tag_id: 1,
      language: 'Python',
      icon: 'https://firebasestorage.googleapis.com/v0/b/hackthon-geek-v6.appspot.com/o/tech_tag_python.png?alt=media\u0026token=49c12d37-1de4-4f45-a09b-a7941b88a056',
    },
    {
      tech_tag_id: 2,
      language: 'JavaScript',
      icon: 'https://firebasestorage.googleapis.com/v0/b/hackthon-geek-v6.appspot.com/o/tech_tag_js.png?alt=media\u0026token=0d9383a9-9543-4065-a3b8-542705ec5dd2',
    },
    {
      tech_tag_id: 3,
      language: 'Java',
      icon: 'https://firebasestorage.googleapis.com/v0/b/hackthon-geek-v6.appspot.com/o/tech_tag_java.png?alt=media\u0026token=eb5b8782-8b37-4b74-a7f8-e27a3bec46dd',
    },
    {
      tech_tag_id: 4,
      language: 'Go',
      icon: 'https://firebasestorage.googleapis.com/v0/b/hackthon-geek-v6.appspot.com/o/tech_tag_go.png?alt=media\u0026token=f353e349-6ef8-4475-ae17-ad55a2a583a1',
    },
    {
      tech_tag_id: 5,
      language: 'C',
      icon: 'https://firebasestorage.googleapis.com/v0/b/hackthon-geek-v6.appspot.com/o/tech_tag_c.png?alt=media\u0026token=1ace1611-202c-46a4-9591-77795f07457d',
    },
    {
      tech_tag_id: 6,
      language: 'Csharp',
      icon: 'https://firebasestorage.googleapis.com/v0/b/hackthon-geek-v6.appspot.com/o/tech_tag_csharp.png?alt=media\u0026token=8af18c6f-03c3-4e28-adfe-ce020020e9fe',
    },
    {
      tech_tag_id: 7,
      language: 'Cpp',
      icon: 'https://firebasestorage.googleapis.com/v0/b/hackthon-geek-v6.appspot.com/o/tech_tag_cpp.png?alt=media\u0026token=556d045f-072a-4dc0-8594-9e1872492035',
    },
    {
      tech_tag_id: 8,
      language: 'kotlin',
      icon: 'https://firebasestorage.googleapis.com/v0/b/hackthon-geek-v6.appspot.com/o/tech_tag_kotlin.png?alt=media\u0026token=0a8d5d5f-21a8-4812-a50d-e1de99fdf110',
    },
    {
      tech_tag_id: 9,
      language: 'PHP',
      icon: 'https://firebasestorage.googleapis.com/v0/b/hackthon-geek-v6.appspot.com/o/tech_tag_php.png?alt=media\u0026token=1f38c3ad-dd5b-4dbb-9122-7ce4f4e9c348',
    },
    {
      tech_tag_id: 10,
      language: 'Rust',
      icon: 'https://firebasestorage.googleapis.com/v0/b/hackthon-geek-v6.appspot.com/o/tech_tag_rust.png?alt=media\u0026token=1f3e0982-a3ff-41c6-981f-1c97bfcd1f90',
    },
    {
      tech_tag_id: 11,
      language: 'Ruby',
      icon: 'https://firebasestorage.googleapis.com/v0/b/hackthon-geek-v6.appspot.com/o/tech_tag_ruby.png?alt=media\u0026token=7611b57f-f525-44e0-bd8d-7e3bc2deedb7',
    },
    {
      tech_tag_id: 12,
      language: 'R',
      icon: 'https://firebasestorage.googleapis.com/v0/b/hackthon-geek-v6.appspot.com/o/tech_tag_r.png?alt=media\u0026token=8e7be7d6-68a7-43dd-924b-e16fc72462b7',
    },
    {
      tech_tag_id: 13,
      language: 'DataBase',
      icon: 'https://firebasestorage.googleapis.com/v0/b/hackthon-geek-v6.appspot.com/o/tech_tag_database.png?alt=media\u0026token=0a1babad-5684-40ff-9922-953b57836fc0',
    },
    {
      tech_tag_id: 14,
      language: 'Cloud',
      icon: 'https://firebasestorage.googleapis.com/v0/b/hackthon-geek-v6.appspot.com/o/tech_tag_cloud.png?alt=media\u0026token=6ed766e8-bb04-42d4-b2c2-c7418f75a067',
    },
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
    { framework_id: 15, tech_tag_id: 4, framework: 'Gin' },
    { framework_id: 16, tech_tag_id: 4, framework: 'Beego' },
    { framework_id: 17, tech_tag_id: 4, framework: 'Revel' },
    { framework_id: 18, tech_tag_id: 4, framework: 'Echo' },
    { framework_id: 19, tech_tag_id: 5, framework: '.NET' },
    { framework_id: 20, tech_tag_id: 5, framework: 'ASP.NET' },
    { framework_id: 21, tech_tag_id: 5, framework: 'ASP.NET MVC' },
    { framework_id: 22, tech_tag_id: 6, framework: '.NET' },
    { framework_id: 23, tech_tag_id: 6, framework: 'ASP.NET' },
    { framework_id: 24, tech_tag_id: 6, framework: 'ASP.NET MVC' },
    { framework_id: 25, tech_tag_id: 7, framework: 'Qt' },
    { framework_id: 26, tech_tag_id: 8, framework: 'Spring' },
    { framework_id: 27, tech_tag_id: 8, framework: 'Ktor' },
    { framework_id: 28, tech_tag_id: 9, framework: 'Laravel' },
    { framework_id: 29, tech_tag_id: 9, framework: 'Symfony' },
    { framework_id: 30, tech_tag_id: 9, framework: 'CodeIgniter' },
    { framework_id: 31, tech_tag_id: 10, framework: 'Rocket' },
    { framework_id: 32, tech_tag_id: 10, framework: 'Actix-web' },
    { framework_id: 33, tech_tag_id: 10, framework: 'Tide' },
    { framework_id: 34, tech_tag_id: 11, framework: 'Ruby on Rails' },
    { framework_id: 35, tech_tag_id: 11, framework: 'Sinatra' },
    { framework_id: 36, tech_tag_id: 11, framework: 'Hanami' },
    { framework_id: 37, tech_tag_id: 11, framework: 'Padrino' },
    { framework_id: 38, tech_tag_id: 12, framework: 'Mojolicious' },
    { framework_id: 39, tech_tag_id: 12, framework: 'Dancer' },
    { framework_id: 40, tech_tag_id: 13, framework: 'MySQL' },
    { framework_id: 41, tech_tag_id: 13, framework: 'PostgreSQL' },
    { framework_id: 42, tech_tag_id: 13, framework: 'MongoDB' },
    { framework_id: 43, tech_tag_id: 13, framework: 'Oracle' },
    { framework_id: 44, tech_tag_id: 13, framework: 'Couchbase' },
    { framework_id: 45, tech_tag_id: 13, framework: 'SQLServer' },
    { framework_id: 46, tech_tag_id: 13, framework: 'Redis' },
    { framework_id: 47, tech_tag_id: 13, framework: 'AlibabaCloud' },
    { framework_id: 48, tech_tag_id: 13, framework: 'OracleCloud' },
    { framework_id: 49, tech_tag_id: 14, framework: 'AWS' },
    { framework_id: 50, tech_tag_id: 14, framework: 'Microsoft Azure' },
    { framework_id: 51, tech_tag_id: 14, framework: 'GCP' },
    { framework_id: 52, tech_tag_id: 14, framework: 'IBM Cloud' },
  ]
  console.log('Preview:', preview)
  return (
    <Grid
      display="flex"
      flexDirection={'row'}
      justifyContent={'center'}
      alignItems={'flex-start'}
      sx={{ width: '90%', mt: 12, ml: 2 }}
      component="form"
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      <Grid
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        sx={{ width: '33%' }}
      >
        {/* 名前 */}
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <TextField
              defaultValue={field.value ? field.value : Userinfo?.username}
              {...field}
              fullWidth
              sx={{ width: '70%', mb: 4 }}
            />
          )}
        />
        <Controller
          name="explantory_text"
          control={control}
          render={({ field }) => (
            <TextField
              defaultValue={
                field.value
                  ? Userinfo?.explantory_text
                  : 'よろしくお願いいたします'
              }
              {...field}
              fullWidth
              sx={{ width: '70%', mb: 4 }}
            />
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
                  sx={{ width: '70%', mb: 4 }}
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
      </Grid>
      <Grid
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        textAlign={'center'}
        sx={{ width: '33%' }}
      >
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
                    {Array.isArray(selected)
                      ? selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))
                      : Userinfo.tech_tag.map((value: any) => (
                          <Chip
                            key={value.tech_tag_id}
                            label={value.language}
                          />
                        ))}
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
                    {Array.isArray(selected)
                      ? selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))
                      : Userinfo.tech_tag.map((value: any) => (
                          <Chip key={value.id} label={value.framework} />
                        ))}
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
        <Button sx={{ m: 'auto', mt: 4 }} variant="contained" type="submit">
          更新
        </Button>
      </Grid>

      <Grid
        sx={{ width: '33%' }}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-around'}
        alignItems={'center'}
        textAlign={'center'}
      >
        {/* address */}
        <Grid>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                sx={{ width: '50%', mb: 4 }}
                defaultValue={Userinfo?.email || ''}
                {...field}
                fullWidth
                label="メールアドレス"
              />
            )}
          />

          <Controller
            name="twitter_link"
            control={control}
            render={({ field }) => (
              <TextField
                defaultValue={Userinfo?.twitter_link || ''}
                {...field}
                fullWidth
                label="Twitter"
                sx={{ width: '50%', mb: 4 }}
              />
            )}
          />
        </Grid>
        <Grid>
          <Controller
            name="github_link"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Github"
                sx={{ width: '50%', mb: 4 }}
              />
            )}
          />

          <Controller
            name="discord_link"
            control={control}
            render={({ field }) => (
              <TextField
                defaultValue={Userinfo?.discord_link || ''}
                {...field}
                fullWidth
                label="Discord"
                sx={{ width: '50%', mb: 4 }}
              />
            )}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
