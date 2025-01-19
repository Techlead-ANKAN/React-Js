import React from 'react';
import { useLogin } from '../../context';

function Home() {

  const {isLogin, username} = useLogin();

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