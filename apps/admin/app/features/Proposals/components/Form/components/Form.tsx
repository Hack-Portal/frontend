import { zodResolver } from '@hookform/resolvers/zod'
import { Path, useForm } from 'react-hook-form'
import {
  Form as FormContainer,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@repo/ui/components/ui/form'
import { Input } from '@repo/ui/components/ui/input'
import { Button } from '@repo/ui/components/ui/button'
import { z } from 'zod'
import { CalendarFormField } from '@/components/element/form/CalendarFormField'
import { TextFormField } from '@/components/element/form/TextFormField'
import type {
  Request_CreateHackathon,
  Response_StatusTag,
} from '@hack_portal/logic/api/@types'
import { CheckboxFormField } from '@/components/element/form/CheckboxFormField'
import { ImageFormField } from '@/components/element/form/ImageFormField'
import { useEffect } from 'react'
import { usePreview } from '../hooks/usePreview'

const urlPattern = new RegExp(
  '^(https?:\\/\\/)?' + // プロトコル
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // ドメイン名
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // IPアドレス
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // ポート番号とパス
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // クエリ文字列
    '(\\#[-a-z\\d_]*)?$',
  'i',
) // フラグメント識別子

const formSchema = z.object({
  expired: z.date({
    required_error: 'A date of birth is required.',
  }),
  link: z.string().refine((val) => urlPattern.test(val), {
    message: 'Invalid URL format', // 不正な形式の場合のエラーメッセージ
  }),
  name: z.string().min(1).max(255),
  start_date: z.date({
    required_error: 'A date of birth is required.',
  }),
  statuses: z.array(z.string()).optional(),
  term: z.number(),
  icon: z.any().refine((file) => file instanceof File, {
    // ここでファイルの存在チェック
    message: 'Icon must be a file',
  }),
})

type FormProps = {
  hackathonDraft: Request_CreateHackathon
  handlePostHackathon: (data: Request_CreateHackathon) => void
  statuses: Response_StatusTag[]
}

export const Form = ({
  hackathonDraft,
  handlePostHackathon,
  statuses,
}: FormProps) => {
  const {
    expired,
    link,
    name,
    start_date,
    term,
    statuses: hackathonStatues,
    icon,
  } = hackathonDraft

  const { previewState } = usePreview()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  useEffect(() => {
    const file = new File([icon], 'icon.png', { type: 'image/png' })
    form.setValue('expired', new Date(expired))
    form.setValue('link', link)
    form.setValue('name', name)
    form.setValue('start_date', new Date(start_date))
    form.setValue(
      'statuses',
      hackathonStatues?.map((status) => String(status)),
    )
    form.setValue('term', term)
    form.setValue('icon', file)
    previewState.handleSetPreview(icon)
  }, [expired, link, name, start_date, hackathonStatues, term, form.setValue])

  const DATE_ITEM_LIST: {
    name: Path<z.infer<typeof formSchema>>
    label: string
  }[] = [
    { name: 'expired', label: '募集締切日' },
    { name: 'start_date', label: '開催日' },
  ]

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log('submit')
    console.log(data)
  }

  return (
    <FormContainer {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL</FormLabel>
              <FormControl>
                <Input placeholder="URLを入力" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <TextFormField<z.infer<typeof formSchema>>
          control={form.control}
          name="name"
          label="ハッカソン名"
          placeholder="名前を入力"
        />
        {DATE_ITEM_LIST.map((item) => (
          <CalendarFormField<z.infer<typeof formSchema>>
            key={item.name}
            control={form.control}
            name={item.name}
            label={item.label}
            placeholder="日付を選択"
          />
        ))}
        <TextFormField<z.infer<typeof formSchema>>
          control={form.control}
          name="term"
          label="期間（日）"
          placeholder="日数を入力"
          isNumber
        />
        <CheckboxFormField<z.infer<typeof formSchema>>
          control={form.control}
          name="statuses"
          label="ステータス"
          items={statuses.map((status) => ({
            value: status.id ? status.id.toString() : 'error',
            label: status.status ? status.status : '存在しません',
          }))}
        />
        <ImageFormField<z.infer<typeof formSchema>>
          control={form.control}
          ogpIcon={icon}
          name="icon"
          label="アイコン"
          previewState={previewState}
        />
        <Button type="submit" onClick={() => console.log(form.getValues())}>
          Submit
        </Button>
      </form>
    </FormContainer>
  )
}
