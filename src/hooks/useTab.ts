"use client"

import { useState } from "react"

export const useTab=()=>{
    const [tab,setTab]=useState(0)
    const handleSetTab=(tab:number)=>{
        setTab(tab)
    }
    return {tab,handleSetTab}
}