import React, {useState, useContext} from 'react';
import MyContext from '../context/MyContext';

function Take_Value() {

    const [username, setUsername] = useState('')

    const {setName} = useContext(MyContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setName(username);
    }

  return (
    <>
        <input type="text" placeholder='enter name here' value={username} onChange={(e) => setUsername(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Take_Value;