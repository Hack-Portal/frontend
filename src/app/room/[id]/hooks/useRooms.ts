import { Db_ListRoomTxResult } from "@/api/@types"
import { useEffect, useState } from "react"
import { FetchRooms } from "../../_services/fetchRooms"

export const useRooms =()=>{
    const [rooms,setRooms] = useState<Db_ListRoomTxResult[]>([])
    const Room = new FetchRooms()

    useEffect(()=>{
        Room.fetchAll().then((res)=>{
            handleSetRooms(res)
        })
    },[])

    const handleSetRooms = (data:Db_ListRoomTxResult[])=>{
        setRooms(data)
    }
    return {rooms}
}