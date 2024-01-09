const defaultLocalPath :string = "http://localhost:8080"

let requestBaseUrl :string
switch (process.env.ENVIRONMENT) {
  case "local":
    requestBaseUrl = process.env.NEXT_PUBLIC_LOCAL_API_URL ? process.env.NEXT_PUBLIC_LOCAL_API_URL : defaultLocalPath
    break
  case "stage":
    requestBaseUrl = process.env.NEXT_PUBLIC_STAGE_API_URL ? process.env.NEXT_PUBLIC_STAGE_API_URL : defaultLocalPath
    break
  case "product":
    requestBaseUrl = process.env.NEXT_PUBLIC_PRODUCT_API_URL ? process.env.NEXT_PUBLIC_PRODUCT_API_URL : defaultLocalPath 
    break
  default:
    requestBaseUrl = defaultLocalPath
}

export const API_URL = requestBaseUrl
