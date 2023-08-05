import { Card, CardContent, CardMedia, Grid } from '@/lib/muiRendering'
import { SignInFormContainer } from './_components/SignInFormContainer/Index'
import { handleFetchLocates } from '@/services/handleFetchLocates'
import { Suspense } from 'react'
import { handleFetchTechTags } from '@/services/handleFetchTechTags'
import { handleFetchFrameworks } from '@/services/handleFetchFrameworks'

const SignIn = async () => {
  const techTags = await handleFetchTechTags()
  const frameworks = await handleFetchFrameworks()
  const locates = await handleFetchLocates()

  return (
    <Grid
      container
      justifyContent={'center'}
      alignContent={'center'}
      sx={{ width: '100vw', height: '100vh' }}
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '90vw',
          height: '90vh',
        }}
      >
        <CardMedia
          component={'img'}
          sx={{ width: '50%', height: '100%', objectFit: 'cover' }}
          title="Your title"
          image={'/image/jin.png'}
        />
        <CardContent
          sx={{
            width: '60%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <SignInFormContainer
              locates={locates}
              techTags={techTags}
              frameworks={frameworks}
            />
          </Suspense>
        </CardContent>
      </Card>
    </Grid>
  )
}
export default SignIn
