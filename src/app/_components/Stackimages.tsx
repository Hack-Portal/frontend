import ReightSideBar from './ReightSideBar'
import img from 'next/image'

interface StackImages {
  id: string
  label: string
  name: string
  icon: string
}

interface UserRatingProps {
  images: StackImages[]
}
const Stackimages = () => {
  const images: StackImages[] = [
    {
      id: '1',
      label: 'FrontendLang',
      name: 'TypeScript',
      icon: 'image/TypeScript.png',
    },

    {
      id: '2',
      label: 'FrontendFramework',
      name: 'Next.js',
      icon: 'image/Next.png',
    },

    {
      id: '3',
      label: 'UILibrary',
      name: 'MaterialUI',
      icon: 'image/mui.png',
    },

    {
      id: '4',
      label: 'BackendLang',
      name: 'GoLang',
      icon: 'image/go.png',
    },

    {
      id: '5',
      label: 'BackendFramework',
      name: 'Jin',
      icon: 'image/jin.png',
    },
    {
      id: '6',
      label: 'DataBase',
      name: 'Firebase',
      icon: 'image/firebase.png',
    },
    {
      id: '7',
      label: 'DataBase',
      name: 'PostgreSQL',
      icon: 'image/PostgreSQL.png',
    },
    {
      id: '8',
      label: 'Cloud',
      name: 'vercel',
      icon: 'image/vercel.png',
    },
  ]

  return (
    <>
      <ReightSideBar stackImages={images} />
    </>
  )
}

export default Stackimages
