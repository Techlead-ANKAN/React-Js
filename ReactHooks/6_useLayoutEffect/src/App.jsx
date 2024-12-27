import React, {useState, useLayoutEffect, useEffect, useRef} from "react";
import './App.css'

function App() {

  const [toggle, setToggle] = useState(false);
  const element = useRef()
  
    useLayoutEffect(() => {
      console.log("useLayoutEffect");
      if (element.current != null)
      {  
        const dim = element.current.getBoundingClientRect();
        console.log(dim)
      }
    }, [toggle])

  useEffect(() => {
    console.log('useEffect');
  }, [toggle])

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h3 ref={element}>This is the use of useLayoutEffect</h3>}
    </>
  )
}

export default App
