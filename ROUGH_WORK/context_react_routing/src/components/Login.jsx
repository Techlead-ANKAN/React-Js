import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';

function Login() {

    const {setUsername, setShowProfile} = useContext(LoginContext)

    const navigate = useNavigate();

    return (
    <>
    
        <form action="">
            <label htmlFor="">Username: </label>
            <input type="text" placeholder='username' onChange={(e) => {setUsername(e.target.value)}}/>

            <label htmlFor="">Password: </label>
            <input type= "password" placeholder='password'/>

            <button onClick={() => {setShowProfile(true); navigate("/")}}>Submit</button>
        </form>

    </>
  )
}

export default Login