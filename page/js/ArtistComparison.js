import React  from "react";
import { Card } from "./Card";
import { useEffect, useState } from "react";

export function ArtistComparison(){
    const rootAPI = 'http://ws.audioscrobbler.com/2.0';
    const keyAPI = '4d2a662e3ae0be5759a731d889e084d1';

    const [inputValue, setInputValue] = useState('');

    const [comparisonFilter, setComparisonFilter] = useState();
    const [comparisonData, setComparisonData] = useState([]);

    useEffect(()=>{
        if(comparisonFilter){
            fetch(`${rootAPI}/?method=artist.getsimilar&artist=${comparisonFilter}&api_key=${keyAPI}&format=json`)
            .then(response => {
                if(response.ok){
                    return response
                }
                throw Error(response.status);
            })
            .then(response => response.json())
            .then ( data => setComparisonData(data.similarartists.artist))
            .catch(err => console.error(err));

            return () => {
                setComparisonData();
            }
        }
    },[comparisonFilter])

    function handleInputChange(e){
        setInputValue(e.target.value);
    }

    function handleSearch(e){
        e.preventDefault();
        setComparisonFilter(inputValue);
    }

    return(
        <section className="artist-comparison">
            <div className="comparison-box">
                <h2 className="comparison__title">
                    Search artists similar to your <span>favorite!</span>
                </h2>

                <form className="comparison__form" onSubmit={handleSearch}>
                    <input type="text" className="comparison__input" onChange={handleInputChange} value={inputValue}/>
                    <button className="main-page__button" type="submit">Search</button>
                </form>
                <div className="card-box">
                    {comparisonData && comparisonFilter && <Card artist={comparisonFilter} key={0}/>}
                    {comparisonData && 
                    comparisonData
                    .filter((artist,id)=>id<7)
                    .map((artist, id)=> <Card artist={artist.name} key={id+1}/>)
                    }
                </div>
            </div>
        </section>
    )
}