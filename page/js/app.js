import React from "react";
import { createRoot } from "react-dom/client"; 

function App(){
    return(
        <>
        <h1>dupa</h1> 
        <h2>kupa</h2>
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>)