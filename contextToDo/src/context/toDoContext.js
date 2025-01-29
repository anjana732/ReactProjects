import { createContext, useContext } from "react";

export const toDoContext = createContext({})

export const useToDo = () =>{ 
    return useContext(toDoContext);
}

export const toDoProvider = toDoContext.Provider