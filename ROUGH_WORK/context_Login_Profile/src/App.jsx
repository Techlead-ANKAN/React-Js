import './App.css';
import { LoginContext } from './contexts/LoginContext';
import Profile from './components/Profile';
import Login from './components/Login';
import { useState } from 'react';


function App() {

  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
      {showProfile ? <Profile /> : <Login />}
    </LoginContext.Provider>
  )
}

export default App
