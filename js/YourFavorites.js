import React from "react";
import { useState, useEffect } from "react";

export function YourFavorites(){
    //input states
    const [artistInput, setArtistInput] = useState('');
    const [albumInput, setAlbumInput] = useState('');
    const [trackInput, setTrackInput] = useState('');

    //favorites states
    const [favArtists, setFavArtists] = useState(getLocalArtists());
    const [favAlbums, setFavAlbums] = useState(getLocalAlbums());
    const [favTracks, setFavTracks] = useState(getLocalTracks());

    //setting state
    function addArtist(e){
        e.preventDefault();
        setFavArtists([...favArtists, artistInput]);
        setArtistInput('');
    }

    function addAlbum(e){
        e.preventDefault();
        setFavAlbums([...favAlbums, albumInput]);
        setAlbumInput('');
    }

    function addTrack(e){
        e.preventDefault();
        setFavTracks([...favTracks, trackInput]);
        setTrackInput('');
    }

    //deleting items
    function deleteArtist(e){
        e.preventDefault();

        setFavArtists((prevArtists)=>prevArtists.filter(
            (artist,id)=>id != e.target.getAttribute('data-id')
        ))
    }
    function deleteAlbum(e){
        e.preventDefault();

        setFavAlbums((prevAlbums)=>prevAlbums.filter(
            (album,id)=>id != e.target.getAttribute('data-id')
        ))
    }
    function deleteTrack(e){
        e.preventDefault();

        setFavTracks((prevTracks)=>prevTracks.filter(
            (track,id)=>id != e.target.getAttribute('data-id')
        ))
    }

    // setting local storage
    useEffect(()=>{
        localStorage.setItem('artists', JSON.stringify(favArtists))
    },[favArtists])

    useEffect(()=>{
        localStorage.setItem('albums', JSON.stringify(favAlbums))
    },[favAlbums])

    useEffect(()=>{
        localStorage.setItem('tracks', JSON.stringify(favTracks))
    },[favTracks])



    //getting local storage items
    function getLocalArtists(){
        let artists = localStorage.getItem('artists');
        if(artists){
            return JSON.parse(localStorage.getItem('artists'));
        }else{
            return [];
        }
    }
    function getLocalAlbums(){
        let albums = localStorage.getItem('albums');
        if(albums){
            return JSON.parse(localStorage.getItem('albums'));
        }else{
            return [];
        }
    }
    function getLocalTracks(){
        let tracks = localStorage.getItem('tracks');
        if(tracks){
            return JSON.parse(localStorage.getItem('tracks'));
        }else{
            return [];
        }
    }

    return(
        <main className="favorites__container">
            <h1  className="favorites__title">These are your <span>favorites!</span></h1>

            <h2 className="favorites__type">Artists</h2>
            <section className="custom-list-box">
                <form className="favorites__form" onSubmit={addArtist}>
                    <input type="text" className="custom-input input--favorites" placeholder="Write here an artist u want to add" value={artistInput} onChange={e =>setArtistInput(e.target.value)}/>
                    <button type="submit" className="custom-button">Add </button>
                </form>
                <ul className="custom-list">
                    {favArtists.map((artist,id)=>(
                        <li className="artist-line" key={id}><p>{artist}</p><button className="custom-button button--delete" data-id={id} onClick={deleteArtist}>Delete</button></li>
                        )
                    )}
                </ul>
            </section>

            <h2 className="favorites__type">Albums</h2>
            <section className="custom-list-box">
                <form className="favorites__form" onSubmit={addAlbum}>
                    <input type="text" className="custom-input input--favorites" placeholder="Write here an album u want to add" value={albumInput} onChange={e => setAlbumInput(e.target.value)}/>
                    <button type="submit" className="custom-button">Add </button>
                </form>
                <ul className="custom-list">
                    {favAlbums.map((album,id)=>(
                        <li className="album-line" key={id}><p>{album}</p><button className="custom-button button--delete" data-id={id} onClick={deleteAlbum}>Delete</button></li>
                        )
                    )}
                </ul>
            </section>

            <h2 className="favorites__type">Tracks</h2>
            <section className="custom-list-box">
                <form className="favorites__form" onSubmit={addTrack}>
                    <input type="text" className="custom-input input--favorites" placeholder="Write here a track u want to add" value={trackInput} onChange={ e => setTrackInput(e.target.value)}/>
                    <button type="submit" className="custom-button">Add </button>
                </form>
                <ul className="custom-list">
                    {favTracks.map((track,id)=>(
                        <li className="track-line" key={id}><p>{track}</p><button className="custom-button button--delete" data-id={id} onClick={deleteTrack}>Delete</button></li>
                        )
                    )}
                </ul>
            </section>
        </main>
    )
}