import Myfunc from "./myfile"


// Note: we all know App() is a function and this is file is jsx where x ---> for the HTML part and js is for the JavaScript part. Since there is the JavaScript Part so we should be able to send variables

// You can send variables by using {<variable_name>}

// Example: Suppose you want
function App() {

  const username = prompt("Enter your name: ")

  return (
    <>
    <h1>Hello {username} this is a React + Vite App</h1>
    <Myfunc />
    </>
  );
}

// Note : {username} it is an evaluated expression which means that you can only use expressions that are already evaluated. You can evaluate within this expression like this :
// {if (true) username}

export default App;
