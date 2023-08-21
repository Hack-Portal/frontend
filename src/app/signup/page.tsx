import { SignBox } from '@/components/layouts/SignBox'
import { SignUpFormContainer } from './_conmponents/SignUpFormContainer/Index'
import { FetchLocates } from './services/fetchLocates'
import { Box } from '@/lib/mui/muiRendering'

const SignUp = async () => {
  const fetchLocates = new FetchLocates()
  const locates = await fetchLocates.fetchAllLocates()

  return (
    <Box sx={{ backgroundColor: '#eee' }}>
      <SignBox>
        <SignUpFormContainer locates={locates} />
      </SignBox>
    </Box>
  )
}
export default SignUp
