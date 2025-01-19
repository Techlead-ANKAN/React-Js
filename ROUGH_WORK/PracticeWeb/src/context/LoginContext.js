import { createContext, useContext } from "react";

export const LoginContext = createContext({
    isLogin: false,
    changeLogin: (isLogin) => {},

    username: "",
    changeUsername: (username) => {},

    password: "",
    changePassword: (password) => {}
});


export const useLogin = () => {
    return useContext(LoginContext);
}

export const LoginProvider = LoginContext.Provider;