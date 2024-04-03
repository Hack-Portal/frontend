import { TextWrapper } from '../element/TextWrapper'
import { LinkWrapper } from '../element/LinkWrapper'
import { Flex } from '@repo/ui/components/ui/flex'
import { useMatches } from '@remix-run/react'

const NAV_ITEMS = [
  {
    label: 'Hackathon',
    to: '/',
  },
  {
    label: 'Users',
    to: '/users',
  },
]

export const LeftNav = () => {
  const matches = useMatches()
  return (
    <Flex direction="column" className="w-28 p-4 h-[100vh] justify-start">
      {NAV_ITEMS.map((item) => (
        <LinkWrapper key={item.to} to={item.to}>
          <TextWrapper
            className={matches[0].pathname === item.to ? 'text-xl' : undefined}
          >
            {item.label}
          </TextWrapper>
        </LinkWrapper>
      ))}
    </Flex>
  )
}
