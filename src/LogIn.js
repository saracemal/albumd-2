import React from 'react';

const LogIn = () => {
    return (
        <div class="container">
            <h1>Log In</h1>
            <div class="inputs">
                <h3>e-mail</h3>
                <input placeholder="example@gmail.com"
                        autocomplete="off"
                        id="email"
                        type="text" />

                <h3>password</h3>
                <input id="password" 
                    type="password" />
            </div>
            <div class="login-button">
                <button>log in!</button>
            </div>
        </div>
    )
}

export default LogIn;