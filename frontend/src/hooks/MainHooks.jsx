import { createContext, useState, useEffect } from "react";

export const StatesContext = createContext();

export const StatesContextProvider = ({children}) =>{
    const [title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [taskImage, setTaskImage] = useState("")
    const [savedTasks, setsavedTasks] = useState(null)
    
    const states = {
        title           : title,
        setTitle        : setTitle,
        Description     : Description,
        setDescription  : setDescription,
        taskImage       : taskImage,
        setTaskImage    : setTaskImage,
        savedTasks      : savedTasks,
        setsavedTasks   : setsavedTasks
    }

    return (
        <StatesContext.Provider value={states}>
            {children}
        </StatesContext.Provider>
    )
}


