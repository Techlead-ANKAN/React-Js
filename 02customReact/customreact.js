function customRender(reactElement, container) {

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
