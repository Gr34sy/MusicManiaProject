import "../scss/main.scss";
import React from "react";
import { createRoot } from "react-dom/client"; 
import { Router, Routes, Route} from 'react-router-dom';
import {Navbar} from "./Navbar";
import { Hero } from "./Hero";
import { ArtistBrowser } from "./ArtistBrowser";
import { ArtistComparison } from "./ArtistComparison";

function App(){
    return(
        <>
        <Navbar/>
            
        <Hero/>

        <ArtistBrowser/>

        <ArtistComparison/>

        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>)