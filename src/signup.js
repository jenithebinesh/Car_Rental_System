import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'

function Register() {
    return React.createElement("div", {
        className: "register-page"
    }, React.createElement("div", {
        className: "Rg"
    }, React.createElement("form", null, React.createElement("h2", null, "Register"), React.createElement("div", {
        className: "Adj"
    }, React.createElement("label", {
        for: "Name",
        id: "nme"
    }, "Full Name"), React.createElement("input", {
        id: "nmeplc",
        placeholder: "Enter your Full Name",
        type: "text"
    }), React.createElement("label", {
        for: "E-mail",
        id: "e-mail"
    }, "E-mail"), React.createElement("input", {
        id: "mailplc",
        placeholder: "Enter your E-mail id",
        type: "email"
    }), React.createElement("label", {
        for: "Username",
        id: "usrnme"
    }, "Username"), React.createElement("input", {
        id: "usrnmeplc",
        placeholder: "Create an Username",
        type: "text"
    }), React.createElement("label", {
        for: "Password",
        id: "pwd"
    }, "Password"), React.createElement("input", {
        id: "pwdplc",
        placeholder: "Create a Password",
        type: "password"
    }), React.createElement("label", {
        htmlFor: "cPassword",
        id: "cpwd"
    }, "Confirm Password"), React.createElement("input", {
        id: "cpwdplc",
        placeholder: "Confirm Password",
        type: "password"
    }), React.createElement("button", {
        type: "Submit",
        id: "sbtbtn"
    }, "Register")))), React.createElement("div", {
        className: "Dha"
    }, React.createElement("h4", null, "Already registered with us?"), React.createElement(Link, {
        to: "/login"
    }, "Login here")));
}
export default Register;