import {configureStore} from "@reduxjs/toolkit";
import {login, logout} from "./authSlice" // It is a Redux Slice that handles authentication based state and actions

// creating a new redux store
const store = configureStore({
    reducer: {login, logout} // these are reducers that handle authentication-related state
});

// exporting the store
export default store;