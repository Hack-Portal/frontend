import { useState } from "react";

export const useIcon = () => {
    const [icon, setIcon] = useState<Blob|null>(null);
    const [preview, setPreview] = useState<string|null>(null);

    const handleSetIcon = (file:Blob|null) => {
        
        if(!file) return;
        const preview = URL.createObjectURL(file);
        setIcon(file);
        setPreview(preview);
        console.log(preview);
    }

    return { handleSetIcon, icon,preview }
}