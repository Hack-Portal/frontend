export const API_URL =
  process.env.NEXT_PUBLIC_ENVIRONMENT === 'local'
    ? process.env.NEXT_PUBLIC_TEST_URL!
    : process.env.NEXT_PUBLIC_API_URL!
