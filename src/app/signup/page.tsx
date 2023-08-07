import { SignBox } from '@/components/layouts/SignBox'
import { SignUpFormContainer } from './_conmponents/SignUpFormContainer/Index'
import { FetchLocates } from './services/fetchLocates'


const SignUp = async() => {
  const fetchLocates = new FetchLocates()
  const locates = await fetchLocates.fetchAllLocates()

  return (
    <SignBox>
        <SignUpFormContainer locates={locates}/>
    </SignBox>
  )
}
export default SignUp
