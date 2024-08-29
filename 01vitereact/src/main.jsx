import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: "a",
    props:{
        href: "https://google.com",
        target: "_blank"
    },
    children: "Visit Google.com"
}

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google !</a>
)

// cretaing a react element using "createElement" method of react which has a speccific syntax for the elements

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

ReactDOM.createRoot(document.getElementById('root')).render(


    <App />

    // It will not render since the props of the this original render function is different
    // reactElement

    // It works since we have created an element that is original html
    // anotherElement


    //
    // react_element

)
