import React, {useContext} from "react";
import { LoginContext } from "../App";
import Following from "./Following";

const Feed = () => {
    const login_value = useContext(LoginContext);
    return (
        <>
        <h2>(2) This is the Feed. Login : {login_value}</h2>
        <Following />
        </>
    );
};

export default Feed;