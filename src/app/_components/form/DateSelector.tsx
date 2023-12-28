'use client'
import TextField, {
  FilledTextFieldProps,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
  TextFieldVariants,
} from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDatePicker, DesktopDatePickerProps } from '@mui/x-date-pickers' // Add DesktopDatePickerProps import
import { Box, Typography } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import { JSX } from 'react'

type Props = {
  name: string
  label: string
}

const DateForm: React.FC<Props> = ({ name, label }) => {
  const { register } = useFormContext()

  return (
    <Box>
      <Box>
        <Typography>{label}</Typography>
      </Box>
      <Box
        sx={{
          position: 'relative',
          width: '300px',
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            // @ts-ignore
            inputFormat="yyyy/MM/dd"
            renderInput={(
              params: JSX.IntrinsicAttributes & {
                variant?: TextFieldVariants | undefined
              } & Omit<
                  | FilledTextFieldProps
                  | OutlinedTextFieldProps
                  | StandardTextFieldProps,
                  'variant'
                >,
            ) => <TextField label={label} {...params} {...register(name)} />}
          />
        </LocalizationProvider>
      </Box>
    </Box>
  )
}
export default DateForm
