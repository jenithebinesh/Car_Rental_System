import React from 'react';
import homelogo from './homelogo.jpg';
import { Link } from "react-router-dom";
import './home.css'
function Home() {
    return   React.createElement("div", {
        className: "App"
    },   React.createElement("header", {
        className: "App-header"
    },   React.createElement("img", {
        src: homelogo,
        className: "App-logo",
        alt: "logo"
    }), "\xA0",   React.createElement("div", {
        className: "login-design"
    },   React.createElement(Link, {
        id: "lgn",
        to: "/login"
    }, "Take a Ride"))));
}
export default Home;