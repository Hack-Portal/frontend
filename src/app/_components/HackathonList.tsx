import { Box, Card, IconButton, Sheet, Button, Badge } from '@mui/joy'

import {
  Paper,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Chip,
} from '@mui/material'

import { HackathonThumb } from '../types/hackathon'
import Typography from '@mui/material/Typography'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import { CenterArea } from '@/components/layouts/CenterArea'
import { CenterRecordCard } from '@/components/layouts/CenterRecordCard'
import Image from 'next/image'

type Props = {
  hackathons: HackathonThumb[]
}

export const HackathonList = (props: Props) => {
  const { hackathons } = props
  return (
    <CenterArea>
      {hackathons.map((hackathon) => (
        <CenterRecordCard
          href={`/hackathons?page_size=3&page_id=1${hackathon.hackathon_id}`}
          key={hackathon.hackathon_id}
        >
          <CardMedia
            component={'img'}
            sx={{ width: 218, height: 218, objectFit: 'cover' }}
            title="Your title"
            image={hackathon.icon.String}
          />

          <CardContent
            sx={{
              display: 'flex',

              minHeight: '270px',
            }}
          >
            <Box sx={{ width: '450px' }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                  sx={{
                    fontSize: '23px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    mb: 2,
                  }}
                  variant="h5"
                >
                  {hackathon.name}
                </Typography>

                <Typography sx={{ mt: 1, mb: 1.5, fontSize: '16px' }}>
                  募集締め切り：{hackathon.expired}
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize: '16px' }}>
                  キックオフ：{hackathon.start_date}
                </Typography>

                <Typography sx={{ mb: 1.5, fontSize: '16px' }}>
                  期間：{hackathon.term}日間
                </Typography>
              </CardContent>
            </Box>

            <Box>
              <CardActions
                sx={{ display: 'flex', width: '500' }}
                disableSpacing
              >
                <IconButton aria-label="add to favorites">
                  <BookmarkBorderOutlinedIcon
                    sx={{ height: '30px', width: '30px' }}
                  />
                </IconButton>
              </CardActions>

              <Grid sx={{ mt: 12, mr: 8 }} spacing={2} container>
                {/* {hackathon.hackthon_tag.map((tag, id) => (
                  <Grid item key={id} xs={4}>
                    <Chip label={tag} sx={{ fontSize: '15px' }} key={id} />
                  </Grid>
                ))} */}
              </Grid>
            </Box>
          </CardContent>
        </CenterRecordCard>
      ))}
    </CenterArea>
  )
}

// import { Box, Card, IconButton, Sheet, Button, Badge } from '@mui/joy'

// import {
//   Paper,
//   CardActions,
//   CardContent,
//   CardMedia,
//   Grid,
//   Chip,
// } from '@mui/material'

// import { HackathonThumb } from '../types/hackathon'
// import Typography from '@mui/material/Typography'
// import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
// import { CenterArea } from '@/components/layouts/CenterArea'
// import { CenterRecordCard } from '@/components/layouts/CenterRecordCard'
// import Image from 'next/image'

// type Props = {
//   hackathons: HackathonThumb[]
// }

// export const HackathonList = (props: Props) => {
//   const { hackathons } = props
//   return (
//     <CenterArea>
//       {hackathons.map((hackathon) => (
//         <CenterRecordCard
//           href={`/hackathons?page_size=3&page_id=1${hackathon.hackathon_id}`}
//           key={hackathon.hackathon_id}
//         >
//           <CardMedia
//             component={'img'}
//             sx={{ width: 218, height: 218, objectFit: 'cover' }}
//             title="Your title"
//             image={hackathon.icon.String}
//           />

//           <CardContent
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               pl: 4,
//               minHeight: '218px',
//             }}
//           >
//             <Typography
//               sx={{
//               overflow: 'hidden',
//                   textOverflow: 'ellipsis',
//                   whiteSpace: 'nowrap',
//                 fontSize: '23px',
//                 pb: 2,
//               }}
//               variant="h3"
//             >
//               {hackathon.name}
//             </Typography>

//             <Grid
//               container
//               direction={'column'}
//               sx={{ display: 'flex', Width: 250 }}
//             >
//               <Typography sx={{ fontSize: '14px' }} color={'#999'}>
//                 募集締め切り
//               </Typography>
//               <Typography sx={{ mt: 0.5, fontSize: '16px' }}>
//                 {new Date(hackathon.expired).toLocaleDateString()}
//               </Typography>
//               <Typography sx={{ mt: 0.5, fontSize: '14px' }} color={'#999'}>
//                 キックオフ
//               </Typography>
//               <Typography sx={{ mt: 0.5, fontSize: '16px' }}>
//                 {new Date(hackathon.start_date).toLocaleDateString()}
//               </Typography>
//               <Typography sx={{ mt: 0.5, fontSize: '14px' }} color={'#999'}>
//                 期間
//               </Typography>
//               <Typography sx={{ fontSize: '16px' }}>
//                 {hackathon.term}日間
//               </Typography>
//             </Grid>
//           </CardContent>

//           <CardContent sx={{ width: '500px' }}>
//             <CardActions
//               sx={{ position: 'absolute', right: 20, top: 20 }}
//               disableSpacing
//             >
//               <IconButton aria-label="add to favorites">
//                 <BookmarkBorderOutlinedIcon
//                   sx={{ height: '30px', width: '30px' }}
//                 />
//               </IconButton>
//             </CardActions>
//             <Grid container>
//               {/* {hackathon.hackathon_tag.map((tag, id) => (
//                 <Grid item key={id}>
//                   <Chip
//                     label={tag.status}
//                     sx={{ mt: 0.5, mr: 0.5, fontSize: '15px' }}
//                     key={id}
//                   />
//                 </Grid>
//               ))} */}
//             </Grid>
//           </CardContent>
//         </CenterRecordCard>
//       ))}
//     </CenterArea>
//   )
// }
