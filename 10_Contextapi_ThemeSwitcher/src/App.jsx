import React, {useEffect, useState} from 'react'
import {ThemeProvider} from "./context/Theme"
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light");
  }

  const darkTheme = () => {
    setThemeMode("dark");
  }

  // actual change in theme
  useEffect(() => {
    const html_ele = document.querySelector("html");
    html_ele.classList.remove("light", "dark");
    html_ele.classList.add(themeMode);
  }, [themeMode])

  return (
  <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">

      <div className="w-full">
      
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/* Theme Button Component */}<ThemeBtn />
        </div>

        <div className="w-full max-w-sm mx-auto">
          {/* Card component */}<Card />
        </div>
      
      </div>
    
    </div>
  </ThemeProvider>
  )
}

export default App
