// Refer to Link: https://chatgpt.com/share/676eb6fb-fee0-800a-ba1a-36d4792697c0


import { useReducer } from 'react'
import './App.css'

const initialState = {count: 0};

const reducer = (state, action) => {
  
  switch(action.type){
    case "increase":
        return {count: state.count + 1}
    case "decrease":
        return {count: state.count - 1}
  }

}
  


function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const inc = () => {
    dispatch({type: "increase"})
  }

  const dec = () => {
    dispatch({type: "decrease"})
  }

  return (
    <>
        <h3>Counter: {state.count}</h3>
        <button onClick={inc}>Increase</button>
        <button onClick={dec}>Decrease</button>
    </>
  )
}

export default App
