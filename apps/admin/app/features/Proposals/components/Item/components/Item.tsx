type ItemProps = {
  url: string
  createdat: Date
}
export const Item = ({ url, createdat }: ItemProps) => {
  return <div>{url}</div>
}
