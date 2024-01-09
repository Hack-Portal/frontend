'use client'
import React from 'react'
import FormProvider from '@/app/_components/form/FormProvider'
import TextFieldComponent from '@/app/_components/form/TextFieldComponent'
import HackathonStatusSelector from '@/app/admin/post_hackathon/_components/HackathonStatusSelector'
import ImgUpload from '@/app/_components/form/ImgUpload'
import { PostHackathonService } from '../_services/PostHackathonService'

type FormData = {
  hacakathonName: string
  link: string
  expired: string
  startDate: string
  term: number
  statuses: string[]
  image: File
}

type Props = {
  //TODO: 型を定義なおす
  tags: any
}
const HacakathonPostForm = () => {
  // const { tags } = props
  const onSubmit = async (data: FormData) => {
    const postHackathon = new PostHackathonService()
    try {
      await postHackathon.postHackathon(data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <FormProvider<FormData>
      defaultValues={{
        hacakathonName: '',
        link: '',
        expired: '',
        startDate: '',
        term: 0,
        statuses: [],
      }}
      onSubmit={onSubmit}
    >
      <TextFieldComponent
        name="hacakathonName"
        label="ハッカソン名"
        validationRules={{
          required: 'ハッカソン名は必須です',
        }}
      />
      <TextFieldComponent
        name="link"
        label="リンク"
        validationRules={{
          required: 'リンクは必須です',
          pattern: {
            //httpから始まるURLのみ許可
            value: /^https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+$/,
            message: '正しいリンクを入力してください',
          },
        }}
      />
      <TextFieldComponent
        name="expired"
        label="締切"
        validationRules={{
          required: '締切は必須です',
          pattern: {
            value:
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.\d+)?(([+-]\d{2}:\d{2})|Z)?$/,
            message:
              'RFC3339 形式 (例: 2022-12-31T23:59:59+09:00) で入力してください',
          },
        }}
      />
      <TextFieldComponent
        name="startDate"
        label="キックオフ"
        validationRules={{
          required: 'キックオフは必須です',
          pattern: {
            value:
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.\d+)?(([+-]\d{2}:\d{2})|Z)?$/,
            message:
              'RFC3339 形式 (例: 2022-12-31T23:59:59+09:00) で入力してください',
          },
        }}
      />
      <TextFieldComponent
        name="term"
        label="期間"
        validationRules={{
          required: '期間は必須です',
          pattern: {
            value: /^[0-9]+$/,
            message: '数字を入力してください',
          },
        }}
      />
      {/* <HackathonStatusSelector statusTags={tags} name="statuses" /> */}
      <HackathonStatusSelector name="statuses" />
      <ImgUpload name="image" label="サムネイル" />
    </FormProvider>
  )
}

export default HacakathonPostForm
