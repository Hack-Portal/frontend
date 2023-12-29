import { Box, Typography } from '@/lib/mui/muiRendering'
import { Content } from './Tutorial/Content'

export const Tutorial = () => {
  const TITLE_STYLE = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
    mb: 2,
  }
  const STRONG_STYLE = {
    fontSize: '2.3rem',
    fontWeight: 'bold',
    color: '#2A98FD',
    mb: 2,
  }

  const CONTENT = [
    {
      title: 'ハッカソンを探す',
      sub: [
        {
          title: (
            <Typography sx={TITLE_STYLE}>
              <Typography component={'span'} sx={STRONG_STYLE}>
                募集中
              </Typography>
              のハッカソンから
              <Typography component={'span'} sx={STRONG_STYLE}>
                自分に合った
              </Typography>
              ハッカソンを探す
            </Typography>
          ),
          description:
            'ヘッダーのハッカソンを選択すると募集中のハッカソンを一覧で見ることができます。期間やタグを基準に参加するハッカソンを選びましょう。クリックするとハッカソンの外部ページを開きます。',
          image: 'hackathoninfo_lite2.gif',
        },
      ],
    },
    {
      title: '仲間を見つける',
      sub: [
        {
          title: (
            <Typography sx={TITLE_STYLE}>
              <Typography component={'span'} sx={STRONG_STYLE}>
                ルーム
              </Typography>
              に参加してハッカソンの
              <Typography component={'span'} sx={STRONG_STYLE}>
                仲間
              </Typography>
              を探す
            </Typography>
          ),
          description:
            'ルーム一覧にはメンバーの総合的な使用技術が表示されます。これらの情報を参考に参加しましょう。チームの技術バランスが均一、または自分と一致する技術を持つ仲間を探すことが理想です。ルームではメンバーとチャットをすることができます。チャットはチーム決めを想定しており、その先の相談はDiscordやSlackなどの外部ツールを推奨しております。',
          image: 'hackathonchat.gif',
        },
        {
          title: (
            <Typography sx={TITLE_STYLE}>
              <Typography component={'span'} sx={STRONG_STYLE}>
                ルーム
              </Typography>
              を作ってハッカソンの
              <Typography component={'span'} sx={STRONG_STYLE}>
                仲間
              </Typography>
              を集める
            </Typography>
          ),
          description:
            'あなたがリーダーとなって仲間を集めます。参加したいハッカソン、メンバーの募集定員を設定し仲間を集めましょう。',
          image: 'hackathonroom.gif',
        },
        {
          title: (
            <Typography sx={TITLE_STYLE}>
              <Typography component={'span'} sx={STRONG_STYLE}>
                メンバー
              </Typography>
              を確定してハッカソンに
              <Typography component={'span'} sx={STRONG_STYLE}>
                挑戦
              </Typography>
              する
            </Typography>
          ),
          description:
            'メンバーと話し合い、チームを確定させましょう。チームが確定すると他のユーザーからルームが閲覧できなくなります。外部SNSを利用して今後の方針を固めましょう。またハッカソンの外部ページから参加登録を忘れずに行いましょう。',
          image: 'hackathonroom.gif',
        },
      ],
    },
    {
      title: 'ハッカソンを攻略する',
      sub: [
        {
          title: (
            <Typography sx={TITLE_STYLE}>
              <Typography component={'span'} sx={STRONG_STYLE}>
                体験談やTips
              </Typography>
              を参考にハッカソンを
              <Typography component={'span'} sx={STRONG_STYLE}>
                攻略
              </Typography>
              しよう
            </Typography>
          ),
          description: 'こちらは現在準備中です',
          image: 'cheat.svg',
        },
      ],
    },
  ]

  return (
    <Box
      sx={{
        px: 16,
        py: 5,
      }}
    >
      {CONTENT.map((content, index) => (
        <Content title={content.title} sub={content.sub} key={index + 1} />
      ))}
    </Box>
  )
}
