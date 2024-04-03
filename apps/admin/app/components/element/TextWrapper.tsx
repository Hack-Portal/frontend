type TextWrapperProps = {
  children: React.ReactNode
  className?: string
}
export const TextWrapper = (props: TextWrapperProps) => {
  const { children, className = 'text-[#333]' } = props
  return <p className={className}>{children}</p>
}
