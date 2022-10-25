import React from "react";

export function YourFavorites(){
    return(
        <main className="favorites__container">
            <h1  className="favorites__title">These are your <span>favorites!</span></h1>

            <h2 className="favorites__type">Artists</h2>
            <section className="custom-list-box">
                <form className="favorites__form">
                    <input type="text" className="custom-input input--favorites" placeholder="Write here an artist u want to add"/>
                    <button type="text"className="custom-button">Add </button>
                </form>
                <ul className="custom-list">
                    <li className="artist-line"><p>kupas</p> <button className="custom-button button--delete">Delete</button></li>
                    <li className="artist-line"><p>kupas</p> <button className="custom-button button--delete">Delete</button></li>
                </ul>
            </section>

            <h2 className="favorites__type">Albums</h2>
            <section className="custom-list-box">
                <form className="favorites__form">
                    <input type="text" className="custom-input input--favorites" placeholder="Write here an album u want to add"/>
                    <button type="text"className="custom-button">Add </button>
                </form>
                <ul className="custom-list">
                    <li className="album-line"><p>kupas</p></li>
                    <li className="album-line"><p>kupas</p></li>
                </ul>
            </section>

            <h2 className="favorites__type">Tracks</h2>
            <section className="custom-list-box">
                <form className="favorites__form">
                    <input type="text" className="custom-input input--favorites" placeholder="Write here a track u want to add"/>
                    <button type="text"className="custom-button">Add </button>
                </form>
                <ul className="custom-list">
                    <li className="track-line"><p>kupas</p></li>
                    <li className="track-line"><p>kupas</p></li>
                </ul>
            </section>
        </main>
    )
}