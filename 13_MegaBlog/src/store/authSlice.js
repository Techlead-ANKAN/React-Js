import { createSlice } from "@reduxjs/toolkit";


// initial state of the authentication slice
const initialState = {
    status: false, // whether the user is authenticated or not
    userData: null
}

// this slice is to find out that whether user is authenticated or not. we will ask these from the store everytime
const authSlice = createSlice({
    name: "auth", // name of the slice
    initialState,

    // an object containing reducers of the slice(authSlice)
    reducers: {

        // reducers are defined here

        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        }, 
        
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
});  

export const {login, logout} = authSlice.actions

export default authSlice.reducers;