type TextWrapperProps = {
  children: React.ReactNode
}
export const TextWrapper = (props: TextWrapperProps) => {
  const { children } = props
  return <p className="text-[#1f1]">{children}</p>
}
