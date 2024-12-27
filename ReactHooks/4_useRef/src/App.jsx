import { useState } from 'react'
import Mutable_variable from './components/Mutable_variable';
import Ref_DOM_Ele from './components/Ref_DOM_Ele';
import './App.css'

function App() {

  return (
    <>
      <Mutable_variable />
      <Ref_DOM_Ele />
    </>
  )
}

export default App
