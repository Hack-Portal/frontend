import { SubmitHandler } from 'react-hook-form'
import { ProfileFormData } from './formData'

export interface UpdateUserInterface {
  update: SubmitHandler<ProfileFormData>
}
