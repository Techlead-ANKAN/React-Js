import {configureStore} from "@reduxjs/toolkit";
import {login, logout} from "./authSlice";

const store = configureStore({
    reducers: {login, logout}
});

export default store;