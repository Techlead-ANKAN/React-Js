import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, update_counter] = useState(0)

  
  
  const addValue = () => {
    if (counter <= 19) {
      update_counter(counter + 1);
    } 
  }

  
  const removeValue = () => {
    
    if (counter > 0) {
      update_counter(counter - 1);
    } 

  }

  return (
    <>
      <h1>React Counter App</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Increase value {counter}</button>
      <br />
      <button onClick={removeValue}>Decrease value{counter}</button>
      <p>This is a footer: {counter}</p>
    </>
  )
}

export default App;