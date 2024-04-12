export const getOGP = async (url: string) => {
  const res = (
    await fetch(`https://corsproxy.io/?${url}`, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
      },
    })
  ).text()
  const text = await res
  const el = new DOMParser().parseFromString(text, 'text/html')
  const headEls = el.head.children

  const ogpArray = Array.from(headEls)
  const newOgpObject = ogpArray.reduce(
    (acc, elem) => {
      const prop = elem.getAttribute('property')
      const content = elem.getAttribute('content')
      if (!prop || !content) {
        return acc
      }

      if (prop === 'og:image') {
        acc.image = content
      }

      if (prop === 'og:title') {
        acc.title = content
      }

      return acc
    },
    { image: '', title: '' },
  ) // 初期値として空の画像URLとタイトルを持つオブジェクトを用意

  return newOgpObject
}
