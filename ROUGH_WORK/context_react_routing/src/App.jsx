import './App.css'
import {useContext} from "react";
import { LoginContext } from './contexts/LoginContext';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from "./Layout";
import Profile from "./components/Profile"; 
import Login from "./components/Login"; 

function App() {

  const [showProfile, setShowProfile] = useContext(LoginContext);
  const [username, setUsername] = useState("");


  
  const myrouter = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: showProfile ? <Profile /> : <Login />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={myrouter} />
  )
}

export default App
