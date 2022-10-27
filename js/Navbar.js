import React from "react";
import {Logotype} from "./Logotype";
import { Link, Outlet } from "react-router-dom";

export function Navbar(){
    return(
        <>
        <nav className="nav">
            <div className="logotype-box">
                <Logotype additionalClass="logotype--nav"/> 
            </div>
            
            <ul className="navlist">
                <li><Link to="/">Main page</Link></li>
                <li><Link to="/favorites">Your Favorites</Link></li>
                <li><Link to="/ArtistsOfTheMonth">Artists Of The Month</Link></li>
                <li><Link to="/SongsOfTheMonth">Songs Of The Month</Link></li>
            </ul>
        </nav>
        <nav className="nav__dropdown">
            <div className="dropdown__box">
                <ul className="dropdown__list">
                    <li><Link to="/">Main page</Link></li>
                    <li><Link to="/favorites">Your Favorites</Link></li>
                    <li><Link to="/ArtistsOfTheMonth">Artists Of The Month</Link></li>
                    <li><Link to="/SongsOfTheMonth">Songs Of The Month</Link></li>
                </ul>
            </div>
        </nav>
        <Outlet/>
        </>
    )
}