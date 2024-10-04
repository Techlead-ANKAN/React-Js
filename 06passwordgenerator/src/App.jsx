import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);  // for length of the password 

  const [numberallowed, setNumberAllowed] = useState(false);  // for numbers in password

  const [charallowed, setCharAllowed] = useState(false);  // for characters in password 

  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGen = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberallowed) str += "0123456789";
    if (charallowed) str += "~!#$%^&*{}[]`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberallowed, charallowed, setPassword]);


  useEffect(() => {passwordGen();
  }, [length, numberallowed, charallowed, passwordGen])

  const CopyPassword = useCallback(() => {
    passwordRef.current?.select();
    navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div class="container">
        <input class='input1' type="text" value={password} ref={passwordRef}placeholder='Generated Password' readOnly />

        <button onClick={CopyPassword}>COPY</button>

        <div className="parameters">
          <input class='input2' type="range" min={6} max={18} value={length} onChange={(event) => {
            setLength(event.target.value);
          }}/>
          <label htmlFor="">Length {length}</label>
          
          <input class='input3' type="checkbox" defaultChecked={numberallowed} onChange={() => {
            setNumberAllowed((prev) => (!prev));
          }}/>
          <label htmlFor="">Numbers</label>

          <input class='input4' type="checkbox" defaultChecked={charallowed} onChange={() => {
            setCharAllowed((prev) => (!prev));
          }}/>
          <label htmlFor="">Characters</label>
        </div>

      </div>
    </>
  )
}

export default App
