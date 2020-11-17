import React from "react";

export default function HeroBackground(props) {
    return (
        <div className="container">
            <img className="heroImg" src={props.img} alt="lake and mountains"/>
        </div>
    )
}