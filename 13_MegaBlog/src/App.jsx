import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components"
import { Outlet } from "react-router-dom";
import './App.css'

function App() {

  // this is for managing whether it is in the loading phase / not
  const [loading, setLoading] = useState(true);

  
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ?
    <>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className='w-full block'>
          <Header />
          <main>
            MegaBlog{/* <Outlet /> */}
          </main>
          <Footer />
        </div>
      </div>
    </>
    : null;
}

export default App;
