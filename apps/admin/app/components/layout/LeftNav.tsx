import { TextWrapper } from '../element/TextWrapper'
import { LinkWrapper } from '../element/LinkWrapper'
import { Flex } from '@repo/ui/components/ui/flex'

export const LeftNav = () => {
  return (
    <Flex direction={'column'}>
      <LinkWrapper to={'/'}>
        <TextWrapper>Hackathon</TextWrapper>
      </LinkWrapper>
    </Flex>
  )
}
