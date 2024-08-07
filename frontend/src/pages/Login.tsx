import React, { useState } from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';

export  default function Login() {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/usuarios/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, nombre: username, password }),
            });

            const data = await response.json();
            if (data.token) {
                localStorage.setItem('token', data.token);
                navigate('/home');
                console.log('Login successful');
            } else {
                console.error('Login failed:', data.msg);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };


    return(
        <main className='main-login'>
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <div className='header'>
            <img className='icon-login' src="../../public/icons/Cirion_Avatar-06.png" alt="Login Icon" />
            <h2>Login</h2>
            </div>
            <div className='input-box'>
    
                <input className='imput-login'
                 type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Email'
                  />
            
                <input className='imput-login'
                 type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder='Username'
                  />
                
                <input className='imput-login'
                 type="password" 
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 placeholder='Password' required
                 />

                <div className='remember-forgot'>
                   <label><input type='checkbox'/>Remember me</label>
                   <a href='#'>Forgot password</a>
                </div>

                <button type='submit'>Login</button>

                <div className='register-link'>
                    <p>Don't have an account <a href='#'>Register</a></p>
                </div>

                </div>
            </form>
        </div>
        </main>
    )
}