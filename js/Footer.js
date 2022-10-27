import React from "react";
import {Logotype} from "./Logotype";

export function Footer(){
    return(
        <footer className="footer">
            <Logotype additionalClass="logotype--footer"/>
            <p className="footer-description">
               &copy; Copyright by Piotr Słupski
            </p>
        </footer>
    )
}