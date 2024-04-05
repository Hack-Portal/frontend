import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@repo/ui/components/ui/form'
import { Checkbox } from '@repo/ui/components/ui/checkbox'
import { FieldValues, Control, Path } from 'react-hook-form'

type CheckboxItemProps = {
  value: string
  label: string
}

type FormProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label: string
  items: CheckboxItemProps[]
}

export const CheckboxFormField = <T extends FieldValues>({
  control,
  label,
  items,
  name,
}: FormProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel className="text-base">{label}</FormLabel>
          </div>
          {items.map((item) => (
            <FormField
              key={item.value}
              control={control}
              name={name}
              render={({ field }) => {
                return (
                  <FormItem
                    key={item.value}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(item.value)}
                        onCheckedChange={(checked) => {
                          // field.value を配列として扱うために、field.value が未定義の場合は空の配列を使用する
                          const currentValue = Array.isArray(field.value)
                            ? field.value
                            : []
                          if (checked) {
                            // チェックされた場合、現在の配列に値を追加
                            return field.onChange([...currentValue, item.value])
                          } else {
                            // チェックが外された場合、該当する値を配列から削除
                            return field.onChange(
                              currentValue.filter(
                                (value) => value !== item.value,
                              ),
                            )
                          }
                        }}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal">
                      {item.label}
                    </FormLabel>
                  </FormItem>
                )
              }}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
