import { useState, useEffect } from 'react'
import check from "./check.png"
import './App.css'

function App() {

  const [num , setnum] = useState(0);

  useEffect(() => {
    const icon = document.getElementsByClassName("icon")[0];
    icon.style.backgroundImage = `url(${check})`;

    let timer = setTimeout(() => {
      icon.style.backgroundImage = '';
    }, 500);


    return () => {
      icon.style.backgroundImage = `url(${check})`;
    };
  }, [num]);

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
      <div class="icon"></div>

      <div class="box">
        <button class="add" onClick={increment}>Increment</button>
        <button class="sub" onClick={decrement}>Decrement</button>
      </div>
    </>
  )
}

export default App
