import React from "react";
import { Card } from "./Card";

export function ArtistComparison(){
    return(
        <section className="artist-comparison">
            <div className="card-box">
                <Card/>
                <Card/>
            </div>
        </section>
    )
}