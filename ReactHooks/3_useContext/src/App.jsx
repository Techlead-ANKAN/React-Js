import React, {createContext} from "react";
import Main_Comp from "./components/Main_Comp";
import './App.css'
import Component from "./assets/Component_Tree.jpg"

export const LoginContext = createContext();

function App() {

  return (
    <>
        <strong><h1>Component Tree</h1></strong>
        <LoginContext.Provider value={"Ankan123"}>
          <Main_Comp /> 
        </LoginContext.Provider>

        <img src={Component} alt="" />
    </>
  )
}

export default App;
