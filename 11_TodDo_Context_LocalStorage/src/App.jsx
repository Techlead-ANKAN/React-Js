import React, { useEffect, useState } from 'react'
import ToDoProvider from "./context"
import './App.css'

function App() {

  const [todos, setTodos] = useState([]);

  // 1) Functionality of "adding" todos
  const addToDo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  // 2) Functionality to "update" todos
  const updateToDo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  // 3) Functionality to "delete" todo
  const deleteToDo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id ))
  }

  // 4) Functionality to "toggle" completion of todos
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => {prevTodo === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo}))
  }

  // Local Storage Feature

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));

    if(todos && todos.length > 0){
      setTodos(todos);
    }
  }, [])


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  

  return (
  
  <ToDoProvider value={{todos, addToDo, updateToDo, deleteToDo, toggleComplete}}>  
    <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                {/* Todo form goes here */} 
            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
            </div>
        </div>
    </div>
  </ToDoProvider>
  )
}

export default App


