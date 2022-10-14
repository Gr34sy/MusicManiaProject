import React from "react";

export function Navbar(){
    return(
        <nav className="nav">
            <div className="logo">
                MusicMania
            </div>

            <ul className="navlist">
                <li>Main page</li>
                <li>Your Favorites</li>
                <li>Artists of the Month</li>
                <li>Songs of the Month</li>
            </ul>
        </nav>
    )
}