import { SelectedLinkState } from '@/features/index/types/hook'

type ItemProps = {
  proposal: {
    id: number
    url: string
    createdat: Date
  }
  selectedLinkState: SelectedLinkState
}
export const Item = ({ proposal, selectedLinkState }: ItemProps) => {
  return <div>{proposal.url}</div>
}
