import type { MetaFunction } from '@remix-run/node'
import { TextWrapper } from '@/components/element/TextWrapper'
import { useProposal } from '@/features/index/hooks/useProposal'
import Proposals from '@/features/Proposals/components/Proposals'
import { Button } from '@repo/ui/components/ui/button'
import { Flex } from '@repo/ui/components/ui/flex'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix SPA' },
    { name: 'description', content: 'Welcome to Remix (SPA Mode)!' },
  ]
}

export default function Index() {
  const { proposals, hackathonDraftState, statuses } = useProposal()
  return (
    <main className="p-4">
      <Proposals>
        <section className="p-4">
          <TextWrapper className="text-xl">申請一覧</TextWrapper>
          <Proposals.List>
            <>
              {proposals.map((proposal) => (
                <Flex key={proposal.id} className="justify-between w-full">
                  <Proposals.Item
                    url={proposal.url}
                    createdat={proposal.createdat}
                  />
                  <Button
                    onClick={() =>
                      hackathonDraftState.handleSetDraftHackathon(proposal.url)
                    }
                  >
                    追加する
                  </Button>
                </Flex>
              ))}
            </>
          </Proposals.List>
        </section>
        <section className="p-4">
          <TextWrapper className="text-xl">追加する</TextWrapper>
          <Proposals.Form
            hackathonDraft={hackathonDraftState.hackathonDraft}
            handlePostHackathon={hackathonDraftState.handlePostHackathon}
            statuses={statuses}
          />
        </section>
      </Proposals>
    </main>
  )
}
