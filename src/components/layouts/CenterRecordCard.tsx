import { Card } from "@mui/material"


type Props = {
  href: string
  children: React.ReactNode
}

export const CenterRecordCard = (props: Props) => {
  const { href, children } = props
  return (
    <a
      href={href}
      style={{ width: '100%' }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Card
        sx={{
          minHeight: 250,
          maxHeight: 250,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          p: 2,
          position: 'relative',
          boxSizing: 'border-box',
          '&:hover': { boxShadow: '0px 0px 2px  1px #1E90FF' },
        }}
      >
        {children}
      </Card>
    </a>
  )
}
