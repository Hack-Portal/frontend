import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@repo/ui/components/ui/form'
import { Input } from '@repo/ui/components/ui/input'
import type { Control, FieldValues, Path } from 'react-hook-form'

type FormProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label: string
  placeholder: string
  isNumber?: boolean
}
export const TextFormField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  isNumber,
}: FormProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={isNumber ? 'number' : 'text'}
              {...field}
              onChange={(e) =>
                isNumber &&
                field.onChange(
                  e.target.value === '' ? '' : Number(e.target.value),
                )
              }
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
