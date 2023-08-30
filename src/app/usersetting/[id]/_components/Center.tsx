'use client'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
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
} from '@/lib/mui/muiRendering'
import { Domain_AccountResponses, Domain_FollowResponse } from '@/api/@types'
import { ProfileFormData } from '../types/formData'
import { UpdateUser } from '../_services/updateUser'

type Props = {
  UpdateUser: (data: ProfileFormData) => void
  Userinfo: Domain_AccountResponses | undefined
}

//都道府県
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
  {
    id: 16,
    label: '富山県',
  },
  {
    id: 17,
    label: '石川県',
  },
  {
    id: 18,
    label: '福井県',
  },
  {
    id: 19,
    label: '山梨県',
  },
  {
    id: 20,
    label: '長野県',
  },
  {
    id: 21,
    label: '岐阜県',
  },
  {
    id: 22,
    label: '静岡県',
  },
  {
    id: 23,
    label: '愛知県',
  },
  {
    id: 24,
    label: '三重県',
  },
  {
    id: 25,
    label: '滋賀県',
  },
  {
    id: 26,
    label: '京都府',
  },
  {
    id: 27,
    label: '大阪府',
  },
  {
    id: 28,
    label: '兵庫県',
  },
  {
    id: 29,
    label: '奈良県',
  },
  {
    id: 30,
    label: '和歌山県',
  },
  {
    id: 31,
    label: '鳥取県',
  },
  {
    id: 32,
    label: '島根県',
  },
  {
    id: 33,
    label: '岡山県',
  },
  {
    id: 34,
    label: '広島県',
  },
  {
    id: 35,
    label: '山口県',
  },
  {
    id: 36,
    label: '徳島県',
  },
  {
    id: 37,
    label: '香川県',
  },
  {
    id: 38,
    label: '愛媛県',
  },
  {
    id: 39,
    label: '高知県',
  },
  {
    id: 40,
    label: '福岡県',
  },
  {
    id: 41,
    label: '佐賀県',
  },
  {
    id: 42,
    label: '長崎県',
  },
  {
    id: 43,
    label: '熊本県',
  },
  {
    id: 44,
    label: '大分県',
  },
  {
    id: 45,
    label: '宮崎県',
  },
  {
    id: 46,
    label: '鹿児島県',
  },
  {
    id: 47,
    label: '沖縄県',
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
  { tech_tag_id: 8, language: 'Kotlin' },
  { tech_tag_id: 9, language: 'PHP' },
  { tech_tag_id: 10, language: 'Rust' },
  { tech_tag_id: 11, language: 'Ruby' },
  { tech_tag_id: 12, language: 'R' },
  { tech_tag_id: 13, language: 'DataBase' },
  { tech_tag_id: 14, language: 'Cloud' },
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

export const Center = (props: Props) => {
  const { UpdateUser, Userinfo } = props
  const { control, handleSubmit, setValue } = useForm()

  useEffect(() => {
    if (TechList) {
      setValue(
        'tech',
        TechList.map((t: any) => t.language),
      )
    }
  }, [setValue])

  const onSubmit = async (data: any) => {
    try {
      const updateUser = UpdateUser(UpdateUser)
      const updatedUser = await updateUser.update(data)
      console.log('ユーザーが更新されました:', updatedUser)
    } catch (error) {
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
    {
      id: 16,
      label: '富山県',
    },
    {
      id: 17,
      label: '石川県',
    },
    {
      id: 18,
      label: '福井県',
    },
    {
      id: 19,
      label: '山梨県',
    },
    {
      id: 20,
      label: '長野県',
    },
    {
      id: 21,
      label: '岐阜県',
    },
    {
      id: 22,
      label: '静岡県',
    },
    {
      id: 23,
      label: '愛知県',
    },
    {
      id: 24,
      label: '三重県',
    },
    {
      id: 25,
      label: '滋賀県',
    },
    {
      id: 26,
      label: '京都府',
    },
    {
      id: 27,
      label: '大阪府',
    },
    {
      id: 28,
      label: '兵庫県',
    },
    {
      id: 29,
      label: '奈良県',
    },
    {
      id: 30,
      label: '和歌山県',
    },
    {
      id: 31,
      label: '鳥取県',
    },
    {
      id: 32,
      label: '島根県',
    },
    {
      id: 33,
      label: '岡山県',
    },
    {
      id: 34,
      label: '広島県',
    },
    {
      id: 35,
      label: '山口県',
    },
    {
      id: 36,
      label: '徳島県',
    },
    {
      id: 37,
      label: '香川県',
    },
    {
      id: 38,
      label: '愛媛県',
    },
    {
      id: 39,
      label: '高知県',
    },
    {
      id: 40,
      label: '福岡県',
    },
    {
      id: 41,
      label: '佐賀県',
    },
    {
      id: 42,
      label: '長崎県',
    },
    {
      id: 43,
      label: '熊本県',
    },
    {
      id: 44,
      label: '大分県',
    },
    {
      id: 45,
      label: '宮崎県',
    },
    {
      id: 46,
      label: '鹿児島県',
    },
    {
      id: 47,
      label: '沖縄県',
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
    { tech_tag_id: 8, language: 'Kotlin' },
    { tech_tag_id: 9, language: 'PHP' },
    { tech_tag_id: 10, language: 'Rust' },
    { tech_tag_id: 11, language: 'Ruby' },
    { tech_tag_id: 12, language: 'R' },
    { tech_tag_id: 13, language: 'DataBase' },
    { tech_tag_id: 14, language: 'Cloud' },
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
          defaultValue={Userinfo?.username}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="名前"
              sx={{ width: '70%', mb: 4 }}
            />
          )}
        />

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
                defaultValue={Userinfo?.locate || ''}
                onChange={handleChange} // 修正されたハンドラを使用
                sx={{ width: '100%', mb: 4 }}
              >
                <MenuItem value={0}>
                  <Typography sx={{ color: '#777' }}>居住地を選択</Typography>
                </MenuItem>
                {Locate &&
                  Locate.map((locate) => (
                    <MenuItem value={locate.id} key={locate.label}>
                      {locate.label}
                    </MenuItem>
                  ))}
              </Select>
            )
          }}
        />

        <FormControl sx={{ m: 1, width: 300 }}>
          <Controller
            name="tech"
            control={control}
            render={({ field }) => (
              <OutlinedInput
                label="Tech"
                {...field}
                fullWidth
                sx={{ width: '70%', mb: 4 }}
                renderValue={(field: any) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {field.value.map((value: any, index: number) => (
                      <Chip key={id} label={value} />
                    ))}
                  </Box>
                )}
              />
            )}
          />
          <Select
            multiple
            value={props.techs?.map((t: any) => t.language) || []}
            // onChange={(e: React.ChangeEvent<{ value: any }>) =>
            //   setValue(
            //     'tech',
            //     Array.from(
            //       e.target.value,
            //       (option: HTMLOptionElement) => option.value,
            //     ),
            //   )
            // }
          >
            {TechList?.map((tech: any) => (
              <option key={tech.tech_tag_id} value={tech.language}>
                {tech.language}
              </option>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid>
        <Controller
          name="email"
          control={control}
          defaultValue={Userinfo?.email || ''}
          render={({ field }) => (
            <TextField
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
          defaultValue={Userinfo?.twitter_link || ''}
          render={({ field }) => (
            <TextField
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
          defaultValue={Userinfo?.github_link || ''}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Github"
              sx={{ width: '70%', mb: 4 }}
            />
          )}
        />

        <Controller
          name="Discord"
          control={control}
          defaultValue={Userinfo?.discord_link || ''}
          render={({ field }) => (
            <TextField
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
