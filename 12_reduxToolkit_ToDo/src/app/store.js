import {configureStore} from "@reduxjs/toolkit";   // importing configureStore from core Redux [ Link: https://redux-toolkit.js.org/api/configureStore ]
import todoReducer from "../features/todo/todoSlice"; // registering the reducers in the store 

export const store = configureStore({

    reducer: todoReducer

});   // exporting the store