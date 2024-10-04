import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [num , setnum] = useState(0);

  function increment() {
    if (num < 99){
      setnum(num+1)
    }
  }

  function decrement(){
    if (num > 0){
      setnum(num-1);
    }
  }

  return (
    <>
      <p>Counter: {num}</p>

      <div class="box">
        <button class="add" onClick={increment}>Increment</button>
        <button class="sub" onClick={decrement}>Decrement</button>
      </div>
    </>
  )
}

export default App
