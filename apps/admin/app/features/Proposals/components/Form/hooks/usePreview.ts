import { useState } from 'react'

export const usePreview = () => {
  const [preview, setPreview] = useState<string>('')
  const handleSetPreview = (preview: string) => {
    setPreview(preview)
  }
  return { previewState: { preview, handleSetPreview } }
}
