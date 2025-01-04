import React, { useContext } from 'react'
import MyContext from './context/MyContext'
import MyContextProvider from "./context/MyContextProvider"
import './App.css'
import ChildComponent from './component/ChildComponent'
import Take_Value from './component/Take_Value'

function App() {


  return (
    <MyContextProvider>
      <Take_Value/>
      <ChildComponent />
    </MyContextProvider>
  )
}

export default App
