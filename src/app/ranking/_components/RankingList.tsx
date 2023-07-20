import { Box, Card, IconButton, Sheet, Button, Badge } from '@mui/joy'

import {

  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  Avatar,
} from '@mui/material'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import { CenterArea } from '@/components/layouts/CenterArea'
import { CenterRecordCard } from '@/components/layouts/CenterRecordCard'
import Image from 'next/image'

const dummyData = Array.from({length: 2}, (_, index) => {
  return {
    isOwner: index === 0, // 例として最初のメンバーをオーナーとする
    icon: 'dummy-icon-url', // ここにダミーデータのアイコンURLを設定
  };
});
export const RankingList = () => {
  return (
   <>
    <CardContent sx={{ width: 250 }}>
    <Grid container direction={'column'} sx={{ Width: 450, ml: 2 }}>
      <Typography
        sx={{
          overflow: 'hidden',
          mt: 2,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          fontSize: '23px',
          width: '220px',
        }}
        variant="h5"
      >
        HackPortal
      </Typography>

      <Typography
        sx={{
          width: '220px',
          mt: 1,
          mb: 1,
          fontSize: '16px',

        }}
        color={'#999'}
      >
      HackathonName
      </Typography>
      <Typography sx={{ width:200, fontSize: '16px' ,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',}}>技育CampVol.6マンスリーハッカソン</Typography>
      <Typography sx={{ mt: 0.5, fontSize: '14px' }} color={'#999'}>
        Concept
      </Typography>
      <Typography sx={{  overflowWrap: "breakWord", mt: 1, fontSize: '16px' }}>ハッカソンのメンバー募集やハッカソン情報まとめ</Typography>

      <Grid container direction={'row'} sx={{ mt: 2.5, mb: 1.5 }}>

      </Grid>
    </Grid>
  </CardContent>
  <CardContent sx={{width:"250px"}}>
  <Grid container direction={'row'} sx={{ mt: 2.5, mb: 1.5 }}>
      {dummyData.map((member, index) =>
        member ? (
          member.isOwner ? (
            <Badge
              variant="solid"
              size="sm"
              badgeInset="10% 20%"
              key={index}
            >
              <Avatar
                sx={{ width: 35, height: 35, mr: 0.5 }}
                src={member.icon}
                alt={'user-icon'}
                variant="rounded"
              />
            </Badge>
          ) : (
            <Avatar
              sx={{ width: 35, height: 35, mr: 0.5 }}
              src={member.icon}
              alt={'user-icon'}
              variant="rounded"
              key={index}
            />
          )
        ) : (
          <Card
            sx={{ width: 35, height: 35, mr: 0.5, background: '#ddd' }}
            key={index}
          ></Card>
        ),
      )}
    </Grid>
    <CardActions
              sx={{ position: 'absolute', right: 20, top: 20 }}
              disableSpacing
            >
              <IconButton aria-label="add to favorites">
                <BookmarkBorderOutlinedIcon
                  sx={{ height: '30px', width: '30px' }}
                />
              </IconButton>
            </CardActions>
    </CardContent>
  </>
  )
}
