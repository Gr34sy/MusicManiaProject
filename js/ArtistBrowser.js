import React, { useEffect, useState } from "react";

export function ArtistBrowser(){
    const rootAPI = 'http://ws.audioscrobbler.com/2.0';
    const keyAPI = '4d2a662e3ae0be5759a731d889e084d1';


    const [browserFilterValue, setBrowserFilterValue] = useState('metal');
    const [browserFilter,setBrowserFilter] = useState([]);

    const [detailsFilterValue, setDetailsFilterValue] = useState()

    const [artistDetails, setArtistDetails] = useState();
    const [artistTopTracks, setArtistTopTracks] = useState([]);
    
    

    useEffect(() => {

        fetch(`${rootAPI}/?method=tag.gettopartists&tag=${browserFilterValue}&api_key=${keyAPI}&format=json`)
        .then(response => {
            if(response.ok){
                return response
            }
            throw Error(response.status);
        })
        .then(response => response.json())
        .then ( data => setBrowserFilter(data.topartists.artist))
        .catch(err => console.error(err))
    }, [browserFilterValue]);


    //useEffect tylko po update detailsFilterValue
    useEffect(() => {
        if(detailsFilterValue){
            //setting artistdetails state
            fetch(`${rootAPI}/?method=artist.getinfo&artist=${detailsFilterValue}&api_key=${keyAPI}&format=json`)
            .then(response => {
                if(response.ok){
                    return response
                }
                throw Error(response.status);
            })
            .then(response => response.json())
            .then ( data => setArtistDetails(data.artist))
            .catch(err => console.error(err));

            //setting toptracks state
            fetch(`${rootAPI}/?method=artist.gettoptracks&artist=${detailsFilterValue}&api_key=${keyAPI}&format=json`)
            .then(response => {
                if(response.ok){
                    return response
                }
                throw Error(response.status);
            })
            .then(response => response.json())
            .then ( data => setArtistTopTracks(data.toptracks.track))
            .catch(err => console.error(err))
        }
    }, [detailsFilterValue]);

    function handleFilterChange(e){
        e.preventDefault();
        setBrowserFilterValue(e.target.value);
    }

    function handleLineClick(e){
        e.preventDefault();
        setDetailsFilterValue(e.target.getAttribute('data-name'));
    }

    return(
        <section className="artist-browser">
            <div className="browser-box">
                <h2 className="browser__title">
                    Browse all <span>music artists</span> around the globe!
                </h2>

                <select className="browser__filter" value={browserFilterValue} onChange={handleFilterChange}>
                    <option value="metal">Metal</option>
                    <option value="nu metal">Nu Metal</option>
                    <option value="rock">Rock</option>
                </select>
                <div className="custom-list-box">
                    <ul className="custom-list">
                        {browserFilter.map(
                            (artist, id)=>(
                            <li key={id} className="artist-line">
                                <p data-name={artist.name} onClick={handleLineClick}>
                                    {artist.name}
                                </p> 

                                <a href={artist.url} className="lastFM-artist-link lastFM-artist-link--screen" target="_blank">
                                    Check out this artist on Last.fm!
                                </a>

                                {/* mobile link */}
                                <a href={artist.url} className="lastFM-artist-link lastFM-artist-link--mobile" target="_blank">
                                    Artist profile
                                </a>
                            </li>)
                        )}
                    </ul>
                </div>

                {!artistDetails && (<p className="lack-of-details">Click on artist for more details</p>)}

                {artistDetails &&(<div className="details-box">
                    <div className="details__header">
                        <h3>{artistDetails.name}</h3>
                        <h3>Top Tracks:</h3>
                    </div>
                    <div className="details__artistinfo">
                        <div className="artistinfo__stats">
                            <p className="artistinfo__playcount">
                                <span>Playcount:</span>{artistDetails.stats.playcount}
                            </p>

                            <p className="artistinfo__listeners">
                                <span>Listeners:</span>{artistDetails.stats.listeners}
                            </p>

                            <div className="artistinfo__tags">
                                <span>Tags:</span><br/>
                                {artistDetails.tags.tag.map(
                                    (tag,id)=>
                                    (<div key={id} className="genre-box--browser">
                                        {tag.name}
                                    </div>)
                                )}
                            </div>
                        </div>
                
                        <ul className="artistinfo__toptracks">
                        {artistTopTracks
                        .filter(
                            (track,id)=>(
                                id<10
                            )
                        )
                        .map(
                            (track,id)=>(
                                <li key={id}><span>{id+1}</span>{track.name}</li>
                            )
                        )}
                        </ul>
                    </div>
                </div>)}
                
            </div>
        </section>
    )
}

// { artistDetails === true ?
//     <div>
//         <p>{artistDetails.name}</p>
//     </div>
// : <p> Click on artist to get details!</p>
// }

