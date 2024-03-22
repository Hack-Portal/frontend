import { headers } from 'next/headers'

export const getAuthorizationHeader = () => {
  const headersInstance = headers()
  const authorization = headersInstance.get('authorization')
  return authorization
}
