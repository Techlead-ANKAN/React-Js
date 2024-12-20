import { useState, useEffect } from 'react'


function App(){

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count} new messages!`;
  }, [count])


  return (
    <>
      <h3>{count} new messages!</h3>
      <button onClick={() => {setCount(count + 1)}}>Click</button>
    </>
  )
}

export default App

/*
NOTE:

1) No dependency given, it will update for every and any change that happens to that component

2) Empty Array given, in this case it will update only at the time of rendering of the component

3) Dependency Array given, in this case it will update when there is any change to the any one of the items in the dependency array


*/