import React from "react";
import LabTabs from "./LabTabs";

export function Card(){
    return(
        <div className="card">
            <figure style={{textAlign: 'center'}}>
                <img src="../images/Hu wallpaper 2.jpg" alt="HU" style={{width:'100%',borderRadius: '15px'}}/>
                <figcaption>
                    <h2 className="card__title">Hollywood Undead</h2>
                </figcaption>
            </figure>

            <LabTabs/>

            <div className="card__genres">
                <div className="genre-box">
                    Trap Metal
                </div>

                <div className="genre-box">
                    Rap Metal
                </div>

                <div className="genre-box">
                    Rapcore
                </div>

                <div className="genre-box">
                    Nu Metal
                </div>

                <div className="genre-box">
                    Metal
                </div>

                <div className="genre-box">
                    Alternative Metal
                </div>
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

            <div className="card__social-media">
                <a href="" className="sm-icon"><i className="fa-brands fa-square-facebook"></i></a>
                <a href="" className="sm-icon"><i className="fa-brands fa-square-instagram"></i></a>
                <a href="" className="sm-icon"><i className="fa-brands fa-youtube"></i></a>
            </div>
        </div>
    )
}