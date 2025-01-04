import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function ChildComponent() {
  
  const {name} = useContext(MyContext);
  
  return (
    <div>Hi {name}</div>
  )
}

export default ChildComponent;