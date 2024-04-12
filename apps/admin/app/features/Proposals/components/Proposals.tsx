'use client'
import { Item } from './Item/components/Item'
import { List } from './List/components/List'
import { Form } from './Form/components/Form'
type ProposalsProps = {
  children: React.ReactNode
}
export const Proposals = ({ children }: ProposalsProps) => {
  return <div>{children}</div>
}
Proposals.Item = Item
Proposals.List = List
Proposals.Form = Form
export default Proposals
