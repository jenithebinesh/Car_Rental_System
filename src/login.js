import React,{useState} from 'react'
import './login.css'
import { Link } from 'react-router-dom'

function Login() {
    const [Usernameval, setUsernameval] = useState("");
    const [Passwordval, setPasswordval] = useState("");

    const handlesubmit = event => {
        event.preventDefault();
    };

    return React.createElement("div", {
        className: "login-page"
    }, React.createElement("div", {
        className: "Lg"
    }, React.createElement("form", null, React.createElement("h2", null, "Sign In"), React.createElement("div", {
        className: "Adj"
    }, React.createElement("div", {
        className: "Adj2"
    }, React.createElement("label", {
        for: "Username",
        id: "usrnme"
    }, "Username"), React.createElement("input", {
        id: "usrplc",
        placeholder: "Enter Username",
        type: "text",
        value: Usernameval,
        onChange: e => {
            setUsernameval(e.target.value);
        }
    }), React.createElement("label", {
        for: "Password",
        id: "pswd"
    }, "Password"), React.createElement("input", {
        id: "pwdplc",
        placeholder: "Enter Password",
        type: "password",
        value: Passwordval,
        onChange: e => {
            setPasswordval(e.target.value);
        }
    })), React.createElement("button", {
        type: "Submit",
        id: "sbtbtn"
    }, "Login")))), React.createElement("div", {
        className: "Dha"
    }, React.createElement("h4", null, "Don't have an account yet?"), React.createElement(Link, {
        to: "/signup"
    }, "Register Now")));
}
export default Login;