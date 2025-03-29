import { useState } from "react";

function useToggle(initialValue = "white"){
    const [color, setColor] = useState(initialValue)

    const toggle = () => {
        if (color == "white"){
            setColor("black")
        }else{
            setColor("white")
        }
    }

    return [color, toggle];
}

export default useToggle;