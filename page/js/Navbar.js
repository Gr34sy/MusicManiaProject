import React from "react";

export function Navbar(){
    return(
        <nav className="nav">
            <div className="logo">
                MusicMania
            </div>

            <ul className="navlist">
                <li><a href="#">Main page</a></li>
                <li><a href="#">Your Favorites</a></li>
                <li><a href="#">Artists of the Month</a></li>
                <li><a href="#">Songs of the Month</a></li>
            </ul>
        </nav>
    )
}