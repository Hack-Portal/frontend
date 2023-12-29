import { useState } from "react";

export const useIcon = () => {
    const [icon, setIcon] = useState<File|null>(null);
    const [preview, setPreview] = useState<string|null>(null);

    const handleSetIcon = (file:File|null) => {
        
        if(!file) return;
        const preview = URL.createObjectURL(file);
        setIcon(file);
        setPreview(preview);
        
    }

    return { handleSetIcon, icon,preview }
}