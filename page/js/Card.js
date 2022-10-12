import React from "react";

export function Card(){
    return(
        <div className="card">
            <figure style={{textAlign: 'center'}}>
                <img src="../images/Hu wallpaper 2.jpg" alt="HU" style={{width:'100%',borderRadius: '15px'}}/>
                <figcaption>
                    <h2 className="card__title">Hollywood Undead</h2>
                </figcaption>
            </figure>

            <div class="member-box">
                <h3 className="member-box__title">Band members:</h3>
                <ul className="card__members">
                    <li>Dylan „Funny Man” Alvarez</li>
                    <li>Jorel „J-Dog” Decker</li>
                    <li>George „Johnny 3 Tears” Ragan</li>
                    <li>Jordon „Charlie Scene” Terrell</li>
                    <li>Daniel „Danny” Murillo </li>
                </ul>
            </div>

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

            <div class="hardometer">
                <p>Hard Level:</p>
                <div class="hardometer__spans"> 
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

            <div class="card__social-media">
                <a href="" className="sm-icon"><i className="fa-brands fa-square-facebook"></i></a>
                <a href="" className="sm-icon"><i className="fa-brands fa-square-instagram"></i></a>
                <a href="" className="sm-icon"><i class="fa-brands fa-youtube"></i></a>
            </div>
        </div>
    )
}