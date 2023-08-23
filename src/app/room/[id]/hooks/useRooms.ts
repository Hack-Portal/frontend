// import { Domain_ListRoomResponse } from '@/api/@types'
// import { useEffect, useState } from 'react'
// import { FetchRooms } from '../../_services/fetchRooms'

// export const useRooms = () => {
//   const [rooms, setRooms] = useState<Domain_ListRoomResponse[]>([])
//   const Room = new FetchRooms()

//   useEffect(() => {
//     Room.fetchAll().then((res) => {
//       handleSetRooms(res)
//     })
//   }, [])

//   const handleSetRooms = (data: Domain_ListRoomResponse[]) => {
//     setRooms(data)
//   }
//   return { rooms }
// }
