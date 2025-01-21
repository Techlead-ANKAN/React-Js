import React, {useContext} from 'react';
import { LoginContext } from '../contexts/LoginContext';


function Profile() {

    const {username} = useContext(LoginContext);

    return (
    <>
    
        <h1>Profile Component</h1>

        <h2>Username: {username}</h2>    
    </>
  )
}

export default Profile;