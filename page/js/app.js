import "../scss/main.scss";
import React from "react";
import { createRoot } from "react-dom/client"; 
import { Router, Routes, Route} from 'react-router-dom';
import { Card } from "./Card";

function App(){
    return(
        <>
        <div className="card-box">
            <Card/>
            <Card/>
        </div>
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>)