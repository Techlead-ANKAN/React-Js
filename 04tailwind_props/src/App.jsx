import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card.jsx"

function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    n1: "Ankan Maity",
    n2: "Atanu Ghosh"
  }

  let newarr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>

      <Card channel="Chai aur code" someobj = {myobj.n1} somearr = {newarr} />
      
      
      <Card channel="Chai aur code" someobj = {myobj.n2} somearr = {newarr} />
    </>
  )
}

export default App
