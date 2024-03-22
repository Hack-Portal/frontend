let requestBaseUrl: string = 'http://localhost:8080'
switch (process.env.ENVIRONMENT) {
  case 'local':
    requestBaseUrl = process.env.NEXT_PUBLIC_LOCAL_API_URL
      ? process.env.NEXT_PUBLIC_LOCAL_API_URL
      : requestBaseUrl
    break
  case 'stage':
    requestBaseUrl = process.env.NEXT_PUBLIC_STAGE_API_URL
      ? process.env.NEXT_PUBLIC_STAGE_API_URL
      : requestBaseUrl
    break
  case 'product':
    requestBaseUrl = process.env.NEXT_PUBLIC_PRODUCT_API_URL
      ? process.env.NEXT_PUBLIC_PRODUCT_API_URL
      : requestBaseUrl
    break
}

export const API_URL = requestBaseUrl
