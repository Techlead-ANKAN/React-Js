import useToggle from "./hooks/useToggle"
import  "./App.css"
function App() {

  const [color, toggle] = useToggle()

  return (
    <>
      <button onClick={toggle} style={{backgroundColor: color, color: "red"}}>
        Click
      </button>
    </>
  )
}

export default App
