import type { MetaFunction } from '@remix-run/node'
import { TextWrapper } from '@/components/element/TextWrapper'
import { useProposal } from '@/features/index/hooks/useProposal'
import Proposals from '@/features/Proposals/components/Proposals'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix SPA' },
    { name: 'description', content: 'Welcome to Remix (SPA Mode)!' },
  ]
}

export default function Index() {
  const { proposals, selectedLinkState } = useProposal()
  return (
    <main className="p-4">
      <Proposals>
        <section className="p-4">
          <TextWrapper className="text-xl">申請一覧</TextWrapper>
          <Proposals.List>
            <>
              {proposals.map((proposal) => (
                <Proposals.Item
                  key={proposal.id}
                  proposal={proposal}
                  selectedLinkState={selectedLinkState}
                />
              ))}
            </>
          </Proposals.List>
        </section>
        <section className="p-4">
          <TextWrapper className="text-xl">追加する</TextWrapper>
          <Proposals.Form selectedLinkState={selectedLinkState} />
        </section>
      </Proposals>
    </main>
  )
}
