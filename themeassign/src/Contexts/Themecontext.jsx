import { createContext,useState } from "react";

export const ThemeContext=createContext();

export const ThemeContextProvider=({children})=>{
    const [Dark,setTheme]=useState("false");

    const handleTheme=(status)=>{
         setTheme(status);
    }
    return(<ThemeContext.Provider value={{Dark,handleTheme}}>
        {children}
    </ThemeContext.Provider>)

}