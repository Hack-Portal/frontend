import { Header } from '@/components/layouts/Header'
import { MainVisual } from '@/app/_components/MainVisual'
import { About } from '@/app/_components/About'
import { Box } from '@mui/material'
import { Footer } from '@/app/_components/Footer'

const Home = async () => {
  
  return (
    <Box sx={{background:"#fff"}}>
      <Header />
      <MainVisual/>
      <About/>
      <Footer/>
    </Box>
  )
}
export default Home
