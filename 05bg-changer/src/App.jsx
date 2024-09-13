import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  
  function colorChange(event) {
    let body = document.getElementsByTagName("body")[0];
    let clickedElement = event.target;
    body.style.background = clickedElement.innerHTML;
  }

  return (
    <>
      <div className="colors">
        <p onClick={colorChange} class="red" >red</p>
        <p onClick={colorChange} class="orange" >orange</p>
        <p onClick={colorChange} class="green" >green</p>
        <p onClick={colorChange} class="blue" >blue</p>
        <p onClick={colorChange} class="pink" >pink</p>
        <p onClick={colorChange} class="black" >black</p>
        <p onClick={colorChange} class="grey" >grey</p>
        <p onClick={colorChange} class="yellow" >yellow</p>
      </div>
    </>
  )
}

export default App
