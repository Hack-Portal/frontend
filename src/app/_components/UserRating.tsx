import React from 'react'
import RatingBarLayout from './RatingBarLayout'

interface User {
  id: string
  Ranking_tags: { id: number; name: string }[]
  name: string
  icon: string
  rating: number
}

interface UserRatingProps {
  users: User[]
}

const UserRating: React.FC<UserRatingProps> = () => {
  const User: User[] = [
    {
      id: '1',
      Ranking_tags: [{ id: 1, name: 'No.1' }],
      name: 'User1',
      icon: 'https://source.unsplash.com/random',
      rating: 99999,
    },
    {
      id: '2',
      Ranking_tags: [{ id: 2, name: 'No.2' }],
      name: 'User2',
      icon: 'https://source.unsplash.com/random',
      rating: 9000,
    },
    {
      id: '3',
      Ranking_tags: [{ id: 3, name: 'No.3' }],
      name: 'User3',
      icon: 'https://source.unsplash.com/random',
      rating: 8000,
    },
    {
      id: '4',
      Ranking_tags: [{ id: 4, name: 'No.4' }],
      name: 'User4',
      icon: 'https://source.unsplash.com/random',
      rating: 7000,
    },
    {
      id: '5',
      Ranking_tags: [{ id: 5, name: 'No.5' }],
      name: 'User5',
      icon: 'https://source.unsplash.com/random',
      rating: 6000,
    },
  ]

  return (
    <>
      <RatingBarLayout users={User} />
    </>
  )
}

export default UserRating
