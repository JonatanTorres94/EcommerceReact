import { createContext, useState } from "react";


export const DarkModeContext = createContext()


export const DarkModeProvider = ({ children }) => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    }

    return (
        <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {/* <div className={isDarkMode ? "dark" : ''}> */}
            {children}
            {/* </div> */}
        </DarkModeContext.Provider>
    )

}