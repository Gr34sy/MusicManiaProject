import React from "react";
import { createRoot } from "react-dom/client"; 

function App(){
    return(
        <>
        <h1></h1> 
        <h2></h2>
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>)