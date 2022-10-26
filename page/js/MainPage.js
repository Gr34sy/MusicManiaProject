import React from "react";
import {Navbar} from "./Navbar";
import { Hero } from "./Hero";
import { ArtistBrowser } from "./ArtistBrowser";
import { ArtistComparison } from "./ArtistComparison";

export function MainPage(){
    return(
        <>         
            <Hero/>
        
            <ArtistBrowser/>
        
            <ArtistComparison/>
        </>
    )
}