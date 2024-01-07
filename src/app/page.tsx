import { MainVisual } from '@/app/_components/MainVisual'
import { About } from '@/app/_components/About'
import { Box } from '@mui/material'

const Home = async () => {
  return (
    <Box sx={{ background: '#fefefe' }}>
      <MainVisual />
      <About />
    </Box>
  )
}
export default Home
