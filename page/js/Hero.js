import React from "react";
import { Logotype } from "./Logotype";

export function Hero(){
    return(
        <main className="hero">
            <div className="hero-container">
                <div className="hero__left">
                    <figure className="figure--screen  hero__figure hero__figure--vertical">
                        <img src="../images/PlayinDude1.jpg" alt="some concert" className="hero__img"/>

                        <figcaption className="figure--screen hero__figcaption">
                            photo by Vinicius Caricatte, source: 
                            <a href="https://www.pexels.com" target="_blank">
                                https://www.pexels.com
                            </a>
                        </figcaption>
                    </figure>
                </div>

                <div className="hero__right">
                    <h1 className="page-title">
                        <span className="about-span">About</span><Logotype additionalClass="logotype--inheritFS"/>
                    </h1>
                    <p className="hero-paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laudantium esse odit at, fugit perferendis numquam sed, doloremque accusamus minima mollitia aliquid! Sequi optio doloremque tenetur quasi dignissimos, voluptatibus porro.
                    </p>

                    <p className="hero-paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eius iste iure ea veritatis, commodi eum sequi impedit atque laudantium fuga. Similique ipsa facere tenetur autem nisi perspiciatis nulla quibusdam, sit doloribus, at cumque nihil velit dolor iure quod voluptatibus quaerat impedit. Officiis recusandae praesentium, alias cupiditate quam dolores rerum?
                    </p>

                    <figure className="hero__figure figure--all">
                        <img src="../images/GuitarPic1.jpg" alt="some concert" className="hero__img"/>

                        <figcaption className="hero__figcaption">
                            photo by Edward Eyer, source: 
                            <a href="https://www.pexels.com" target="_blank">
                                https://www.pexels.com
                            </a>
                        </figcaption>
                    </figure>
                </div> 
            </div>

            <figure className="hero__figure hero__figure--big figure--all">
                <img src="../images/ConcertPic1.jpg" class="hero__img big-img"/>

                <figcaption className="hero__figcaption big-figcaption">
                    photo by Sebastian Ervi, source: 
                    <a href="https://www.pexels.com" target="_blank">
                        https://www.pexels.com
                    </a>
                </figcaption>
            </figure>
        </main>
    )
}