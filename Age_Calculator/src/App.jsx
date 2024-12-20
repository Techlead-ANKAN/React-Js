import React, {useState, useEffect} from 'react';
import './App.css'

function App() {
  
  const [ dob, setDob ] = useState('');
  const [ age, setAge ] = useState('');

  function calculateAge( event ){

    if (!dob) {
      alert("Enter your DOB")
    }

    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    
    setAge(age);

  }


  

  return (
    <>
      <h1>Age Calculator</h1>
      <div className="container">
        <label>Enter Date of Birth: </label>
        <input id="dob" value={dob} type="date" onChange={(e) => { setDob(e.target.value) }}></input>

        <label>Age: </label>
        <input type='text' value={age} ></input>

        <button onClick={calculateAge}>Calculate</button>
      </div>

    </>
  )

}
export default App
