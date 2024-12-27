import React, {useRef} from "react";

const Ref_DOM_Ele = () => {

    const refElement = useRef();

    const ref = () => {
        console.log(refElement.current.innerHTML);
    }

    return (
        <>
        <div class="REF">
            <h3 ref={refElement}>Referencing the DOM Element</h3>
            <button onClick={ref}>Click</button>
        </div>
        </>
    );
}
export default Ref_DOM_Ele;