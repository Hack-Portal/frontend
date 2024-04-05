import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@repo/ui/components/ui/form'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@repo/ui/components/ui/select'
import { FieldValues, Control, Path } from 'react-hook-form'

type SelectItemProps = {
  value: string
  label: string
}

type FormProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label: string
  items: SelectItemProps[]
  placeholder: string
}

export const SelectFormField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  items,
}: FormProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="bg-white">
              {items.map((item) => (
                <SelectItem value={item.value} key={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
