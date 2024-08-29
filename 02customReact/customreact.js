function customRender(reactElement, container) {


    // Version - 1 (This version is ok but incase of the no.of attributes it could be a problem so we ned to generalize it.) 
    /*  
    const domEle = document.createElement(reactElement.type);
    
    domEle.setAttribute("href", reactElement.props.href);
    domEle.setAttribute("target", reactElement.props.target);

    domEle.innerHTML = reactElement.children;

    container.appendChild(domEle);
    */

    // Version - 2
    const domEle = document.createElement(reactElement.type);

    domEle.innerHTML = reactElement.children;

    for (const prop in reactElement.props){

        // Sometimes children is inserted in props for that purpose
        if (prop === "children") continue;

        else{
            domEle.setAttribute(prop, reactElement.props[prop])
        }
    }

    container.appendChild(domEle);
}

// This is how React sees the components 
const reactElement = {
    type: "a",
    props:{
        href: "https://google.com",
        target: "_blank"
    },
    children: "Visit Google.com"
}

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
