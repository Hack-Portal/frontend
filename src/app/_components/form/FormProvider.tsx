'use client'
import { Button } from '@mui/material'
import React from 'react'
import {
  useForm,
  SubmitHandler,
  FormProvider,
  FieldValues,
  DefaultValues,
} from 'react-hook-form'

type FormContainerProps<TFormValues extends FieldValues> = {
  defaultValues: DefaultValues<TFormValues> | undefined
  children: React.ReactNode
  onSubmit: SubmitHandler<TFormValues>
}

function FormContainer<TFormValues extends FieldValues>({
  defaultValues,
  children,
  onSubmit,
}: FormContainerProps<TFormValues>) {
  const methods = useForm<TFormValues>({
    defaultValues,
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
        <Button
          type="submit"
          sx={{
            mt: 2,
            width: '100%',
            height: '50px',
            borderRadius: '10px',
          }}
        >
          送信
        </Button>
      </form>
    </FormProvider>
  )
}

export default FormContainer
