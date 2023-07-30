import React from 'react'
import { Grid, Box, Paper, CardMedia } from '@mui/material'
import { Typography } from '@mui/joy'
export const HackathonData = () => {
  return (
    <>
      <Box sx={{ width: '1100px' }}>
        <Box display={'row'} sx={{ mt: 2 }}>
          <Grid textAlign={'center'}>
            <CardMedia
              component="img"
              image="image/1.jpg"
              alt="img"
              sx={{
                width: '950px',
                height: '600px',
                objectFit: 'cover',
                m: 'auto',
              }}
              //2016 × 1286
            />
            {/* HackathonName */}
            <Typography component="h4" sx={{ mt: 3, fontSize: 40 }}>
              【技育CAMP】マンスリーハッカソン vol.8
            </Typography>
          </Grid>
        </Box>

        <Grid sx={{ mt: 2, width: '1100px', pb: 5 }} margin={'auto'}>
          <Paper elevation={5} sx={{ width: '1200px', pb: 5 }}>
            <Typography
              sx={{
                m: 'auto',
                width: '900px',
                borderBottom: 'double',
                fontSize: 30,
                mt: 3,
                pt: 2,
              }}
            >
              ハッカソン詳細
            </Typography>
            <Box
              sx={{
                m: 'auto',
                width: '800px',
                fontSize: 20,
                mt: 2,
                pt: 2,
              }}
            >
              <Typography sx={{ mt: 1, fontSize: '20px' }}>
                ■日程
                <br />
                キックオフ : 8月3日(木) 19:00-19:30
                <br />
                事前開発期間 :8月4日(土) ~ 8月19日(土) <br />
                ハッカソン: 8月19日(土) 11:00~8月20日(日) 20:00
                <br />
                ※キックオフとハッカソン（2days）は原則全員ご参加ください
                <br />
                ※事前開発期間は、時間のある方のみ実施をしてください
                <br />
                ※全てオンラインにて実施されます <br />
              </Typography>
              <Typography sx={{ mt: 2, fontSize: '20px' }}>
                ■場所
                <br />
                オンライン
                <br />
                開会式、成果発表などはZoomにてオンライン開催します。
                <br />
                開催URLは申し込み後にイベントページに表示されますのでご確認をお願いします。
                <br />
              </Typography>
              <Typography sx={{ mt: 2, fontSize: '20px' }}>
                ■ハッカソンのタイムスケジュール
                <br />
                DAY1 <br />
                11:00-12:00 : オープニング
                <br />
                12:00-20:00 : 開発時間 <br />
                20:00-20:15 : 初日締め会 <br />
                DAY2 <br />
                11:00-15:00 :開発時間 <br />
                15:00-16:00 : プレゼン資料作成・練習 <br />
                16:00-18:30 :成果発表プレゼン <br />
                18:30-19:00 : 表彰式
                <br />
                19:00-20:00 : 懇親会
                <br />
                ※2日間の開発時間は、目安となります。各自、お好きな時間に行ってください
                <br />
              </Typography>
              <Typography sx={{ mt: 2, fontSize: '20px' }}>
                ■参加チームについて
                <br />
                本ハッカソンは、個人でもチームでも参加可能です。
                <br />
                チーム単位で申し込みをされる場合は、チーム全員が本イベントに申し込みをしてください。
                <br />
                なお、即席チーム（希望者同士でのチーム編成）を希望する方は、キックオフにてその旨をお伝えください。
                <br /> ■制作物について 制作物のテーマ、制約はありません。
                <br />
                「プログラミングを用いて制作したものであれば何でもOK」となります。
                <br />
                技育CAMPは、 「 初心者大歓迎 」 。<br />
                授業や趣味でプログラミングはしているけど、実際に創ったことはない。
                <br />
                就活を見据えても、何か成果物といえるものを創りたいけど、ずるずるここまで来てしまった。
                <br />
                開発インターンやアルバイトの予定もないけど、何か一つ頑張った証を残したい。
                <br />
                そんな方々にぜひご参加頂ければと思っています。
                <br />
              </Typography>
              <Typography sx={{ mt: 2, fontSize: '20px' }}>
                ■事前開発について
                <br />
                本ハッカソンでは、約2週間前のキックオフより事前の開発が可能です。
                <br />
                ハッカソンでは2日間しか開発のお時間をご用意しておりません。
                <br />
                事前にある程度開発を進めておくことをオススメいたします。
                <br />
                ※原則、キックオフ以降にゼロから開発を行っていただきます
                <br />
                ※キックオフより前の開発はできません
                <br />
              </Typography>
              <Typography sx={{ mt: 2, fontSize: '20px' }}>
                ■事前準備
                <br />
                事前にSlack、Zoomのインストールをお願いいたします。
                <br />
                エントリーいただいた方はハッカソン用のSlackに招待いたします。
                <br />
                (Slackへの招待は、キックオフ開催週より行います)
                <br />
              </Typography>
              <Typography sx={{ mt: 2, fontSize: '20px' }}>
                ■成果発表について
                <br />
                成果発表はプレゼン資料、動作デモ、可能ならばGitHubリポジトリを用意し発表ください。
                <br />
                プレゼン時間は2分を想定。発表順は、発表当日にランダムに決めます。
                <br />
                ※チーム数により発表形式を一部変更する場合がございます。
                <br />
              </Typography>
              <Typography sx={{ mt: 2, fontSize: '20px' }}>
                ■審査方法
                <br />
                審査員方式にて行います。詳細は検討中、決定次第ご案内します。
                <br />
              </Typography>
            </Box>
            <Typography
              sx={{
                m: 'auto',
                width: '900px',
                borderBottom: 'double',
                fontSize: 30,
                mt: 2,
                pt: 2,
              }}
            >
              参加特典(賞)
            </Typography>
            <Box
              sx={{
                m: 'auto',
                width: '800px',
                fontSize: 20,
                mt: 2,
                pt: 2,
              }}
            >
              <Typography sx={{ mt: 2, fontSize: '20px' }}>
                ■最優秀賞
                <br />
                チームに賞金50,000円贈呈いたします
                <br />
                ■優秀賞
                <br />
                チームに賞金30,000円贈呈いたします
                <br />
                ■企業賞
                <br />
                チームに賞金5,000円贈呈いたします
                <br />
                ■参加賞
                <br />
                ハッカソンの成果発表された方全員に参加賞1,000円を贈呈いたします
                ※
                <br />
                参加特典についてはサポーターズに会員登録とサポーターズで本イベントのエントリーが必要となります。
                <br />
              </Typography>
            </Box>

            <Typography
              sx={{
                m: 'auto',
                width: '900px',
                borderBottom: 'double',
                fontSize: 30,
                mt: 3,
                pt: 2,
              }}
            >
              注意点
            </Typography>

            <Box
              sx={{
                m: 'auto',
                width: '800px',
                fontSize: 20,
                mt: 3,
                pt: 2,
              }}
            >
              ・申し込み人数が予定数に達した場合、申し込み締切日より前に受付終了致します
              <br />
              ・通常オンライン開催の場合支援金の支給はありませんが、本イベントは参加賞として支援金支給があります
              <br />
              ・当イベントへ申し込みいただき、ハッカソンの成果発表、アンケートの回答を完了された場合のみ支援金が支給されます
              <br />
              ・支援金支給は翌月15日前後になります
              <br />
              ・支援金支給条件：
              <br />
              プロフィールの顔写真、基本情報、志望職種、学歴情報、志向性、経験情報
              <br />
              スキル情報（経験者のみ）を記入している方
            </Box>
          </Paper>
        </Grid>
      </Box>
    </>
  )
}
