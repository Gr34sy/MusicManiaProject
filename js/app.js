import "../scss/main.scss";
import React from "react";
import { createRoot } from "react-dom/client"; 
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Layout } from "./Layout";
import { YourFavorites } from "./YourFavorites";
import {MainPage} from "./MainPage";
import {ArtistsOTM} from "./ArtistsOTM";
import {SongsOTM} from "./SongsOTM";

function App(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/favorites' element={<YourFavorites/>}/>
                    <Route path='/artistsOfTheMonth' element={<ArtistsOTM/>}/>
                    <Route path='/songsOfTheMonth' element={<SongsOTM/>}/>
                </Route>
            </Routes>
        </Router>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>)