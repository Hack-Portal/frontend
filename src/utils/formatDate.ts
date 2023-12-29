
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const month = date.getMonth() + 1 // 月は0から始まるので、1を足します。
  const day = date.getDate()

  return `${month}月${day}日`
}
