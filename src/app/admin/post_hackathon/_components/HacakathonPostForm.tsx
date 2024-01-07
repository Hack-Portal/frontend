'use client'
import React from 'react'
import FormProvider from '@/app/_components/form/FormProvider'
import TextFieldComponent from '@/app/_components/form/TextFieldComponent'
import HackathonStatusSelector from '@/app/admin/post_hackathon/_components/HackathonStatusSelector'
import ImgUpload from '@/app/_components/form/ImgUpload'
import { Response_StatusTag } from '@/api/@types'
type FormData = {
  hacakathonName: string
  link: string
  expired: Date
  startDate: Date
  term: Date
  statuses: string[]
  image: File
}

type Props = {
  //TODO: 型を定義なおす
  tags: any
}
const HacakathonPostForm = () => {
  // const { tags } = props
  const onSubmit = (data: FormData) => {}

  return (
    <FormProvider<FormData>
      defaultValues={{
        hacakathonName: '',
        link: '',
        expired: new Date(),
        startDate: new Date(),
        term: new Date(),
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
            value: /^(19|20)\d\d\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/,
            message: 'YYYY/MM/DDの形式で入力してください',
          },
        }}
      />
      <TextFieldComponent
        name="startDate"
        label="キックオフ"
        validationRules={{
          required: 'キックオフは必須です',
          pattern: {
            value: /^(19|20)\d\d\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/,
            message: 'YYYY/MM/DDの形式で入力してください',
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
