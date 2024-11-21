import { createContext, useState } from "react";

export const DrowerContext = createContext();
export default function DrowerProvider({children}) {
    const [open, setOpen] = useState(false);

    return <DrowerContext.Provider value={{open, setOpen}}>
        {children}
    </DrowerContext.Provider>
}