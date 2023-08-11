import { useState } from "react"
import { LoginType } from "../types/loginType"

export const useSelectLogin = () => {
    const [selected,setSelected] = useState<LoginType>(null)
    const handleSetSelected = (select:LoginType) => {
        setSelected(select)
    }
    return {selected,handleSetSelected}
}