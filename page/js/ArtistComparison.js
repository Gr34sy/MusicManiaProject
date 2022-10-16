import React from "react";
import { Card } from "./Card";

export function ArtistComparison(){
    return(
        <section className="artist-comparison">
            <div class="comparison-box">
                <p className="comparison__title">Similar artist searching</p>
                
                <div className="card-box">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </section>
    )
}