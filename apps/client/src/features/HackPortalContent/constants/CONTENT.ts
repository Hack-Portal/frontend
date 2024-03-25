export const CONTENTS: Content[] = [
  {
    title: 'ハッカソンを探す',
    text: '自分に合ったハッカソンを見つけよう',
    image: '/image/searchPeople.svg',
    href: '/hackathon',
  },
  {
    title: '仲間を見つける',
    text: '仲間を集めて、ハッカソンに挑戦しよう',
    image: '/image/member.svg',
    href: 'https://discord.gg/wsrNZUWUR6',
  },
]

export interface Content {
  title: string
  text: string
  image: string
  href: string
}
