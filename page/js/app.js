import "../scss/main.scss";
import React from "react";
import { createRoot } from "react-dom/client"; 
import { Router, Routes, Route} from 'react-router-dom';
import { Card } from "./Card";
import {Navbar} from "./Navbar";
import { Hero } from "./Hero";
import { ArtistBrowser } from "./ArtistBrowser";

function App(){
    return(
        <>
        <Navbar/>
            
        <Hero/>

        <ArtistBrowser/>

        <section className="card-box">
            <Card/>
            <Card/>
        </section>

        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>)