'use client'
import React from 'react'
import FormProvider from '@/app/_components/form/FormProvider'
import TextFieldComponent from '@/app/_components/form/TextFieldComponent'
import DateSelector from '@/app/_components/form/DateSelector'
import { AddIcon } from '@/lib/mui/muiRendering'
import GeneralModal from '@/app/_components/GeneralModal'
type FormData = {
  hacakathonName: string
  link: string
  expired: Date
  startDate: Date
  term: Date
}

const HacakathonPostForm = () => {
  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <GeneralModal buttonContent={<AddIcon />}>
      <FormProvider<FormData>
        defaultValues={{
          hacakathonName: '',
          link: '',
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
      </FormProvider>
    </GeneralModal>
  )
}

export default HacakathonPostForm

// type CreateHackathon struct {
//     Name      string
//     Link      string
//     Expired   time.Time 締切
//     StartDate time.Time　キックオフ
//     Term      int　期間
//     Statuses  int64　ステータス
