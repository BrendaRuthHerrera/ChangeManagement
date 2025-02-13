import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/Login.css';

export default function Register() {
    const[email, setEmail] = useState('');
    const[username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/usuarios/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({ email, nombre: username, password }),
            });

            const data = await response.json();
            console.log("Registration response:", data);
            if(response.ok) {
                console.log('Registration successful');
                navigate('/login');
            } else {
                setError(data.msg || 'Registration failed');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setError('An error occurred during registration');
        }
    };

    return(
        <main className='main-login'>
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <div className='header'>
                    <img className='icon-login' src="../../public/icons/Cirion_Avatar-06.png" alt="Register Icon" />
                    <h2>Register</h2>
                </div>
                <div className='input-box'>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        required
                    />
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='Username'
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        required
                    />
                    <button type='submit'>Register</button>
                </div>
                {error && <p className="error-message">{error}</p>} 
            </form>
        </div>
    </main>
    )
}