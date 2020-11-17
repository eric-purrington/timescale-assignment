import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="brand">
                <h2>Travelize</h2>
                <p>My traveling experiences</p>
            </div>
            <ul>
                <li><a href="#" className="home">Home</a></li>
                <li><a href="#" className="blog">Blog</a></li>
                <li><a href="#" className="about">About</a></li>
            </ul>
        </nav>
    )
}