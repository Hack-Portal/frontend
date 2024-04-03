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
import { SelectedLinkState } from '@/features/index/types/hook'
import { CalendarFormField } from '@/components/element/form/CalendarFormField'
import { TextFormField } from '@/components/element/form/TextFormField'

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
  // statuses: z.array(z.number()).optional(),
  term: z.number(),
  // icon: z.any().refine((file) => file instanceof File, {
  //   // ここでファイルの存在チェック
  //   message: 'Icon must be a file',
  // }),
})

type FormProps = {
  selectedLinkState: SelectedLinkState
}

export const Form = ({ selectedLinkState }: FormProps) => {
  const { activeLink, handleLinkSelection } = selectedLinkState
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

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
  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    handleLinkSelection(e.target.value)
  }
  return (
    <FormContainer {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <TextFormField<z.infer<typeof formSchema>>
          control={form.control}
          name="name"
          label="ハッカソン名"
          placeholder="名前を入力"
        />
        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL</FormLabel>
              <FormControl>
                <Input
                  placeholder="URLを入力"
                  {...field}
                  onChange={handleLinkChange}
                  value={activeLink}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
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
        <Button type="submit" onClick={() => form.setValue('link', activeLink)}>
          Submit
        </Button>
      </form>
    </FormContainer>
  )
}
