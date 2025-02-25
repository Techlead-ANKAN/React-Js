import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "../features/counterSlice";

function CounterPage() {
    const count_value = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
  return (
    <>
    <h1>Counter: {count_value}</h1>
    <button onClick={() => dispatch(increment())} >+1</button>
    <button onClick={() => dispatch(decrement())} >-1</button>
    </>
  )
}

export default CounterPage