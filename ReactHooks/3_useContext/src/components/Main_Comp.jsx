import React, {useContext} from "react";
import { LoginContext } from "../App";
import Feed from "./Feed";

const Main_Comp = () => {
    const login_value = useContext(LoginContext);
    return (
        <>
        <h2>(1) This is the Main_Comp. Login : {login_value}</h2>
        <Feed />
        </>
    );

};

export default Main_Comp;