import { Header } from '@/components/layouts/Header'
import { MainVisual } from './_components/MainVisual'
import { About } from './_components/About'
import { Footer } from './_components/Footer'
import { Issues } from './_components/Issues'
import { Tutorial } from './_components/Tutorial'
import { Box } from '@/lib/mui/muiRendering'

const Home = async () => {
  
  return (
    <Box sx={{background:"#fff"}}>
      <Header />
      <MainVisual/>
      <About/>
      <Issues/>
      <Tutorial/>
      <Footer/>
    </Box>
  )
}
export default Home
