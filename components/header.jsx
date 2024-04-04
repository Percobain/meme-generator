import React from "react";
import "../styles/header.css";

export default function Header() {
    return (
        <div className="header-yo">
            <div className="left-side">
                <img className="logo" src = "../src/assets/trollface.svg" alt = "trollface_logo" />
                <p className="title">Meme Generator</p>
            </div>
            <div className="right-side">
                <p>React Course - Project 3</p>
            </div>
        </div>
    );
}