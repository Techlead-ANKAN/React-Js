import React, { useEffect } from 'react';
import { useLogin } from '../../context';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {

  
  const {isLogin, changeLogin, changeUsername, changePassword} = useLogin();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  
  console.log("Before: "+isLogin);
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!username || !password){
      return
    }
    else{
      changeLogin(true);

      console.log("Username: " + username);
      console.log("Password: " + password);
      
    }
  }
  useEffect(() => {
    console.log("After: "+isLogin);
  } , [isLogin, changeLogin])
  
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    changeUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    changePassword(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} action="">
      <label htmlFor="">Username</label>
      <input type="text" placeholder='Enter Your username' value={username} onChange={handleUsernameChange}/>

      <br />
      <br />

      <label htmlFor="">Password</label>
      <input type= "password" placeholder="Enter your password" value={password} onChange={handlePasswordChange}/>

      <br />
      <br />

      <button type="submit">Submit</button>
    </form>
  )
}

export default Login