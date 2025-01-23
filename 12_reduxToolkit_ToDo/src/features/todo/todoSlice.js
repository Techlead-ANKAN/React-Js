import {createSlice, nanoid} from "@reduxjs/toolkit";   // nanoid generateds unique id 


// create initialstate
const initialState = {
    todos:  []
}


// create slice
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo); // updating the state
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => 
                todo.id !== action.payload
            )
        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload; // getting the values of id and text from action.payload
            const todo = state.todos.find((todo) => todo.id === id);  // finding the required todo
            if (todo){
                todo.text = text;  // updating the text of the todo
            }
        }
    }
})


export const {addTodo, removeTodo, updateToDo} = todoSlice.actions;

export default todoSlice.reducer;