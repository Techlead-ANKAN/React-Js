import React, {useState, useEffect} from "react"
import { useDispatch } from "react-redux";
import { Outlet } from 'react-router-dom';
import authServices from "./appwrite/authServices"
import {login, logout} from "./store/authSlice"
import './App.css'
import {Header, Footer} from "./components";

function App() {

  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch()

  useEffect(() => {
    authServices.getCurrentUser().then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() => setIsLoading(false))
  }, [])


  return !isLoading ? 
    <>
      <h1>Postbook</h1>
      <div>
        <div>
          <Header />
            <main>
              {/* {Outlet} */}
            </main>
          <Footer />
        </div>
      </div>
    </>
  : null
}

export default App
