import React from "react";
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode:"Light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})

export const ThemeProvider = ThemeContext.Provider

const useTheme=()=>{
    return useContext(ThemeContext)
}

export default useTheme;