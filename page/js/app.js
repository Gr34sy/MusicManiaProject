import "../scss/main.scss";
import React from "react";
import { createRoot } from "react-dom/client"; 
import { Router, Routes, Route} from 'react-router-dom';
import { Card } from "./Card";
import {Navbar} from "./Navbar";

function App(){
    return(
        <>
        <Navbar>
            
        </Navbar>
        <section className="card-box"></section>

        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>)