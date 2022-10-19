import React, { useEffect, useState } from "react";

export function ArtistBrowser(){
    const [filterValue, setFilterValue] = useState('metal')
    const [browserFilter,setBrowserFilter] = useState([]);
    
    const rootAPI = 'http://ws.audioscrobbler.com/2.0'
    const keyAPI = '4d2a662e3ae0be5759a731d889e084d1'
    

    useEffect(() => {
        fetch(`http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=${filterValue}&api_key=4d2a662e3ae0be5759a731d889e084d1&format=json`)
        .then(response => {
            if(response.ok){
                return response
            }
            throw Error(response.status);
        })
        .then(response => response.json())
        .then ( data => setBrowserFilter(data.topartists.artist))
        .catch(err => console.error(err))
    }, [filterValue]);

    function handleFilterChange(e){
        setFilterValue(e.target.value);
    }

    return(
        <section className="artist-browser">
            <div className="browser-box">
                <h2 className="browser__title">
                    Browse all <span>music artists</span> around the globe!
                </h2>

                <select className="browser__filter" value={filterValue} onChange={handleFilterChange}>
                    <option value="metal">Metal</option>
                    <option value="nu metal">Nu Metal</option>
                    <option value="rock">Rock</option>
                </select>
                <div className="browser-list-box">
                    <ul className="browser__list">
                        {browserFilter.map(
                            (artist, id)=>(
                            <li key={id}>
                                {artist.name} 
                                <a href={artist.url} className="lastFM-artist-link lastFM-artist-link--screen" target="_blank">
                                    Check out this artist on last.fm!
                                </a>
                                <a href={artist.url} className="lastFM-artist-link lastFM-artist-link--mobile" target="_blank">
                                    Artist profile
                                </a>
                            </li>)
                        )}
                    </ul>
                </div>


                <div className="details-box">
                    <p>Click for details</p>
                </div>
                
            </div>
        </section>
    )
}

