import React from "react";
import { Card } from "./Card";

export function ArtistComparison(){
    return(
        <section className="artist-comparison">
            <div class="comparison-box">
                <h2 className="comparison__title">
                    Search artists similar to your <span>favorite!</span>
                </h2>

                <form class="comparison__form">
                    <input type="text" className="comparison__input"/>
                    <button class="main-page__button">Search</button>
                </form>
                <div className="card-box">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </section>
    )
}