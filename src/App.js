import './App.css';
import React from 'react'
import Login from './login';
import Home from './home'
import Signup from './signup'
import Website from './website.js'
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";

function App() {
    return   React.createElement(Router, null,   React.createElement(Routes, null,   React.createElement(Route, {
        path: "/",
        element:   React.createElement(Home, null)
    }),   React.createElement(Route, {
        path: "/login",
        element:   React.createElement(Login, null)
    }),   React.createElement(Route, {
        path: "/signup",
        element:   React.createElement(Signup, null)
    }),   React.createElement(Route, {
        path: "/website",
        element:   React.createElement(Website, null)
    })));
}
export default App;





