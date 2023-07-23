import { Grid, Input } from '@mui/joy'
import { Typography, TextField, MenuItem, Button, Chip } from '@mui/material'

import React from 'react'
export const Center = () => {
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
  const Tech = [
    {
      id: 1,
      label: 'HTML',
    },
    {
      id: 2,
      label: 'CSS',
    },
  ]

  return (
    <Grid
      display={'row'}
      sx={{ width: '400px', textAlign: 'center', ml: 5, mr: 5, mt: 8 }}
    >
      <Grid display={'row'} sx={{ textAlign: 'center', mb: 4 }}>
        <Typography sx={{ mt: 1, mr: 2, mb: 2 }}>Name</Typography>
        <Input sx={{ height: '10px' }} placeholder="Placeholder" />
      </Grid>
      <Grid display={'row'} sx={{ mb: 8 }}>
        <Typography sx={{ mt: 1, mr: 2, mb: 2 }}>locate</Typography>

        <TextField
          select
          label="locate"
          defaultValue="1"
          sx={{ height: '20px', width: '180px' }}
        >
          {Locate.map((option) => (
            <MenuItem key={option.id} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid display={'row'} sx={{ mb: 8 }}>
        <Typography sx={{ mt: 1, mr: 3, mb: 2 }}>Tech</Typography>

        <TextField
          select
          label="Tech"
          defaultValue="1"
          sx={{ height: '20px', width: '200px' }}
        >
          {Tech.map((option) => (
            <MenuItem key={option.id} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid display={'row'} sx={{ mt: 5 }}>
        <Typography sx={{ mt: 1, mr: 3, mb: 2 }}>Frameworks</Typography>

        <TextField
          select
          label="Frameworks"
          defaultValue="1"
          sx={{ height: '20px', width: '200px' }}
        >
          {Tech.map((option) => (
            <MenuItem key={option.id} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid display={'row'} sx={{ mt: 12 }}>
        <Typography sx={{ mb: 3 }}>Techs & Frameworks</Typography>
        <Chip label="Javascript" />
        <Chip label="Next" />
      </Grid>
      <Grid
        display={'row'}
        alignItems={'center'}
        sx={{ width: '400px', mt: 5 }}
      >
        <Typography sx={{ mb: 3 }}>受賞</Typography>
        <Grid display={'flex'} sx={{ mt: 5 }}>
          <Chip label="技育CampハッカソンVol.6 企業賞" />
          <Chip label="技育CampハッカソンVol.6 企業賞" />
        </Grid>
      </Grid>
      <Grid display={'row'} sx={{ mt: 5 }}>
        <Typography sx={{ mb: 3 }}>過去作</Typography>
        <Chip label="企業賞" />
        <Chip label="企業賞" />
      </Grid>
    </Grid>
  )
}
