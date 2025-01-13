import {createContext, useContext} from "react";  // Importing the required react hooks to create and use context api  

// Context Definition (Context Object --> ToDoContext)

// The object that is passed inside the createContext is a the default value if no provider is used.
export const ToDoContext = createContext({

    // todos -> An array of todo objects for the to-do itemeach with: 
        // id -> unique id for each todo 
        // text -> the text of the todo item
        // completed -> a boolean indicating whether the todo item is completed or not

    todos: [
        {
            id: 1,
            todo: "Todo task",
            completed: false
        }
    ],

    // Placeholder Functions

    addToDo: (todo) => {}, // function to add new todo

    updateToDo: (id, todo) => {}, // function to update an existing todo
 
    deleteToDo: (id) => {}, // function to delete a todo

    toggleComplete: (id) => {} // function to toggle the completion status of a todo
});

// ------------------------------------------------------------------------------------------------------------------

// Custom hook for consuming the context.

//Note: Components will call this hook and will get access to the "ToDoContext" context
export const useToDo = () => {
    return useContext(ToDoContext);
}

//  -----------------------------------------------------------------------------------------------------------------

// Context Provider
export const ToDoProvider = ToDoContext.Provider;