import React, { useState, useEffect } from 'react';
import '../styles/Login.css';

export  default function Login() {

    const handdleLogin = (e: { preventDefault: () => void; }) : void => {
        e.preventDefault();
        console.log({
            username: username,
            password: password
        });
    }

    return(
    <main>
        <div className='login-container'>
        <div className='login'>
            <form>
                <label>Username:</label>
                <input className='imput-login' type="text"/>
                <label>Password:</label>
                <input className='imput-login' type="password" />
                <button>Login</button>
            </form>
        </div>
        </div>
        </main>
    )
}