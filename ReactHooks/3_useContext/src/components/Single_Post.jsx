import React, {useContext} from "react";
import { LoginContext } from "../App";

const Single_Post = () => {
    const login_value = useContext(LoginContext);
    return (
        <h2>(4) This is the Single Post. Login : {login_value}</h2>
    )
};

export default Single_Post;