import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@repo/ui/components/ui/form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@repo/ui/components/ui/popover'
import { Calendar } from '@repo/ui/components/ui/calendar'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'
import { Button } from '@repo/ui/components/ui/button'
import type { Control, FieldValues, Path } from 'react-hook-form'
type FormProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label: string
  placeholder: string
}
export const CalendarFormField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
}: FormProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button variant={'outline'}>
                  {field.value ? (
                    format(field.value, 'yyyy年 MM月 dd日')
                  ) : (
                    <span>{placeholder}</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) => date < new Date('2024-01-01')}
                initialFocus
                className="bg-white"
                modifiersClassNames={{
                  selected: '#000',
                  today: 'my-today',
                }}
                modifiersStyles={{
                  selected: {
                    backgroundColor: '#333',
                    color: '#fff',
                    borderRadius: '50%',
                  },
                  today: {
                    backgroundColor: '#eee',
                  },
                }}
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
