
// These are the 2 libraries that are being iomported to manipulate the DOM of Web 
import React from 'react';  // Core Foundational Library
import ReactDOM from 'react-dom/client';  // Implemention of React on Web is ReactDOM

// Importing the App() from app.js
import App from './App';


// createRoot is a method of ReactDOM which is used to create the root of its own DOM or the virtual DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

//  Finding the element with id = "root" from 01basicreact\public\"index.html" file.


// Now i am telling the root to render the App (take it as a sample custom tag) which is refering to 01basicreact\src\App.js and returns an "html"
root.render(
    <App />
);


