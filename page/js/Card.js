import React from "react";
import LabTabs from "./LabTabs";
import {useState, useEffect} from "react";

export function Card({artist}){
    const rootAPI = 'http://ws.audioscrobbler.com/2.0';
    const keyAPI = '4d2a662e3ae0be5759a731d889e084d1';

    const[artistData, setArtistData] = useState();
    const[artistAlbums, setArtistAlbums] = useState();

    useEffect(()=>{

        fetch(`${rootAPI}/?method=artist.getinfo&artist=${artist}&api_key=${keyAPI}&format=json`)
        .then(response => {
            if(response.ok){
                return response
            }
            throw Error(response.status);
        })
        .then(response => response.json())
        .then ( data => setArtistData(data.artist))
        .catch(err => console.error(err));
    },[])

    console.log(artistData)

    return(
        (artistData &&
        <div className="card">
            <figure>
                <img src="../images/Hu wallpaper 2.jpg" alt="HU" className="card__img"/>
                <figcaption>
                    <h3 className="card__title">{artistData.name}</h3>
                </figcaption>
            </figure>

            <LabTabs/>

            <div className="card__genres">
                <div className="genre-box">
                    Trap Metal
                </div>

                <div className="genre-box">
                    Rap Metal
                </div>

                <div className="genre-box">
                    Rapcore
                </div>

                <div className="genre-box">
                    Nu Metal
                </div>

                <div className="genre-box">
                    Metal
                </div>

                <div className="genre-box">
                    Alternative Metal
                </div>
            </div>

            <div className="hardometer">
                <p>Hard Level:</p>
                <div className="hardometer__spans"> 
                    {/* 10 spanów */}
                    <span className="hardometer__number">6</span>
                    <span className="hardometer__span"></span>
                    <span className="hardometer__span"></span>
                    <span className="hardometer__span"></span>
                    <span className="hardometer__span"></span>
                    <span className="hardometer__span"></span>
                    <span className="hardometer__span"></span>
                    <span className="hardometer__span"></span>
                    <span className="hardometer__span"></span>
                    <span className="hardometer__span"></span>
                    <span className="hardometer__span"></span>
                </div>
            </div>

            {/* <div className="card__social-media">
                <a href="" className="sm-icon"><i className="fa-brands fa-square-facebook"></i></a>
                <a href="" className="sm-icon"><i className="fa-brands fa-square-instagram"></i></a>
                <a href="" className="sm-icon"><i className="fa-brands fa-youtube"></i></a>
            </div> */}
        </div>
        )
    )
}