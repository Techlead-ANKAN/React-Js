import './App.css'
import { DateContext } from './context/DateContext'
import Home from "./components/Home";
import {useState} from "react";

function App() {

  const [date, setDate] = useState(new Date());

  return (
    <DateContext.Provider value={{date, setDate}}>
      <Home />
    </DateContext.Provider>
  )
}

export default App
