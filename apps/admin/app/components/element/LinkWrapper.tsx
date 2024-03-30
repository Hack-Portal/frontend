import { Link } from '@remix-run/react'

type LinkWrapperProps = {
  to: string
  children: React.ReactNode
}
export const LinkWrapper = (props: LinkWrapperProps) => {
  const { to, children } = props
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      {children}
    </Link>
  )
}
