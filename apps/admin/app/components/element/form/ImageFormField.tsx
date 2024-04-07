import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@repo/ui/components/ui/form'
import { Input } from '@repo/ui/components/ui/input'
import { ChangeEvent, useState } from 'react'
import type { FieldValues, Control, Path } from 'react-hook-form'

type FormProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label: string
}

export const ImageFormField = <T extends FieldValues>({
  control,
  name,
  label,
}: FormProps<T>) => {
  const [preview, setPreview] = useState('')
  const getImageData = (event: ChangeEvent<HTMLInputElement>) => {
    // FileList is immutable, so we need to create a new one
    const dataTransfer = new DataTransfer()

    // Add newly uploaded images
    Array.from(event.target.files!).forEach((image) =>
      dataTransfer.items.add(image),
    )

    const files = dataTransfer.files
    const displayUrl = URL.createObjectURL(event.target.files![0])

    return { files, displayUrl }
  }
  return (
    <div>
      {preview && (
        <img src={preview} width={300} height={300} alt="hackathon_img" />
      )}
      <FormField
        control={control}
        name={name}
        render={({ field: { onChange, value, ...rest } }) => (
          <>
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  {...rest}
                  onChange={(event) => {
                    const { files, displayUrl } = getImageData(event)
                    setPreview(displayUrl)
                    onChange(files[0])
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </>
        )}
      />
    </div>
  )
}
