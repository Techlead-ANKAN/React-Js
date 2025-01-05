import { createContext, useContext } from "react";

// Here we are giving default values which can be a variable as well as a method inside an object 
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
});


// Context Provider 
export const ThemeProvider = ThemeContext.Provider;

// Custom hooks
export default function useTheme() {
    return useContext(ThemeContext);
}