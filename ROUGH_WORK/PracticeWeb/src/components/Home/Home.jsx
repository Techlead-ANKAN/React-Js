import React from 'react';
import { useLogin } from '../../context';

function Home() {

  const {isLogin, username} = useLogin();  
  console.log('username:', username); // Add this line
  console.log('isLogin:', isLogin); // Add this line

  if(!isLogin){
    return(
      <p>Please Login</p>
    )
  }


  return (
    <>
      <p>Hello {username}</p>
    </>
  )
}

export default Home