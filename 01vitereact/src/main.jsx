import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/*
// Ways of creating a react element: -

// 1) Using a plain object
const reactElement = {
    type: "a",
    props:{
        href: "https://google.com",
        target: "_blank"
    },
    children: "Visit Google.com"
}


// 2) Using jsx
const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google !</a>
)



// 3) Using React.createElement
const react_element = React.createElement(

    // 1st Parameter - Tags (Type of element to be created)
    "a",

    // 2nd Parameter - Object (All the attributes of the element)
    {
        href: "https://google.com",
        target: "_blank"
    },

    // 3rd Parameter - Text
    "Click me to visit Google"
)
*/


ReactDOM.createRoot(document.getElementById('root')).render(


    <App />


)
