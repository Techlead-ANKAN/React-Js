import React from "react";
import MyContext from "./MyContext";

const MyContextProvider = ({children}) => {

    const [name, setName] = React.useState("")

    return(
        <MyContext.Provider value={{name, setName}}>
            {children}
        </MyContext.Provider>
    )

}

export default MyContextProvider;