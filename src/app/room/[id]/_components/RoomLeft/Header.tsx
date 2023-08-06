import {
  Avatar,
  Box,
  Grid,
  Tab,
  Tabs,
  Typography,
} from '@/lib/mui/muiRendering'
import React from 'react'

type Props = {
  icon: string
  title: string
  handleSetTab: (tab: number) => void
  tab: number
}
export const Header = (props: Props) => {
  const { icon, title, handleSetTab, tab } = props
  return (
    <Grid
      container
      sx={{
        mt: 3,
      }}
      alignItems={'center'}
      direction={'column'}
      justifyContent={'center'}
      my={3}
    >
      <Avatar
        variant="rounded"
        src={icon}
        sx={{ width: 50, height: 50, objectFit: 'cover' }}
      />
      <Typography variant="h6" color="#333">
        {title}
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
        <Tabs onChange={(_, value) => handleSetTab(value)} value={tab}>
          <Tab label="ルーム" sx={{ width: '50%' }} />
          <Tab label="ハッカソン" sx={{ width: '50%' }} />
        </Tabs>
      </Box>
    </Grid>
  )
}
