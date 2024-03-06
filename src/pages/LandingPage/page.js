import React from "react";

export default function LandingPage(props) {

    const login = () => window.location.href = 'http://26.147.127.222:3000/api/auth/discord';

    return (
        <header>
            <h1>Hello, world! Landing</h1>
            <button onClick={login}>Login</button>
        </header>
    );
}