import React from "react";
import LabTabs from "./LabTabs";
import {useState, useEffect} from "react";

export function Card({artist}){
    const rootAPI = 'http://ws.audioscrobbler.com/2.0';
    const keyAPI = '4d2a662e3ae0be5759a731d889e084d1';

    const[artistData, setArtistData] = useState();
    const[artistAlbums, setArtistAlbums] = useState();
    const[artistTags, setArtistTags] = useState();
    const[artistTopTracks, setArtistTopTracks] = useState();

    useEffect(()=>{
        //artist data
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

        //top top albums
        fetch(`${rootAPI}/?method=artist.gettopalbums&artist=${artist}&api_key=${keyAPI}&format=json`)
        .then(response => {
            if(response.ok){
                return response
            }
            throw Error(response.status);
        })
        .then(response => response.json())
        .then ( data => setArtistAlbums(data.topalbums.album))
        .catch(err => console.error(err));

        //top tags
        fetch(`${rootAPI}/?method=artist.gettoptags&artist=${artist}&api_key=${keyAPI}&format=json`)
        .then(response => {
            if(response.ok){
                return response
            }
            throw Error(response.status);
        })
        .then(response => response.json())
        .then ( data => setArtistTags(data.toptags.tag))
        .catch(err => console.error(err));

        //top tracks
        fetch(`${rootAPI}/?method=artist.gettoptracks&artist=${artist}&api_key=${keyAPI}&format=json`)
        .then(response => {
            if(response.ok){
                return response
            }
            throw Error(response.status);
        })
        .then(response => response.json())
        .then ( data => setArtistTopTracks(data.toptracks.track))
        .catch(err => console.error(err));

    },[])


    return(
        (artistData && artistAlbums && artistTags && artistTopTracks &&
        <div className="card">
            {/* <figure> 
                <img src={'jkh'} alt="picture of an artist" className="card__img"/>
                <figcaption>
                    <h3 className="card__title">{artistData.name}</h3>
                </figcaption>
            </figure> */}
            
            <h3 className="card__title">{artistData.name}</h3>
            <LabTabs albums={artistAlbums} toptracks={artistTopTracks}/>

            <div className="card__genres">

                {artistTags
                .filter((tag,id)=>id<9)
                .map((tag,id) =>(
                    <div key={id} className="genre-box">
                        {tag.name}
                    </div>
                ))
                }
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

        </div>
        )
    )
}