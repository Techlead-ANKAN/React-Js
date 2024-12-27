import React, {useState, useRef, useEffect} from "react";

const Mutable_variable = () => {

    const [name, setName] = useState("");
    const count = useRef(0);

    useEffect(()=>{
        count.current = count.current + 1;
    });

    return (
        <>
        <div class="MUT">

            <input name="str" type="text" onChange={(e) => setName(e.target.value)}/>
            <h3>Name: {name}</h3>
            <h3>Renders: {count.current}</h3>

        </div>
        </>
    );
}
export default Mutable_variable;