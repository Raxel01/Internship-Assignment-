import { createContext, useState, useEffect } from "react";

export const StatesContext = createContext();

export const StatesContextProvider = ({children}) =>{
    const [title, setTitle] = useState(null)
    const [Description, setDescription] = useState(null)
    const [taskImage, setTaskImage] = useState(null)
    
    const states = {
        title           : title,
        setTitle        : setTitle,
        Description     : Description,
        setDescription  : setDescription,
        taskImage       : taskImage,
        setTaskImage    : setTaskImage
    }

    return (
        <StatesContext.Provider value={states}>
            {children}
        </StatesContext.Provider>
    )
}


