import React, {useContext} from "react";
import { LoginContext } from "../App";
import Single_Post from "./Single_Post";

const Following = () => {
    const login_value = useContext(LoginContext);
    return ( 
        <>
            <h2>(3) This is the Following. Login : {login_value}</h2>
            <Single_Post />
        </>
    
    );
};

export default Following;