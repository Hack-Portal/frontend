'use client'
import { useState } from 'react'

export function useOpen() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(!open)

  return { open, handleOpen }
}
