import React, { useState } from 'react';
import '../styles/Login.css';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/usuarios/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (data.token) {
                if (rememberMe) {
                    localStorage.setItem('token', data.token);
                } else {
                    sessionStorage.setItem('token', data.token);
                }
                navigate('/home');

            } else {
                console.error('Login failed:', data.msg);
                setError(data.msg || 'Login failed');
            }
        } catch (error) {
            setError('Ha ocurrido un error durante el inicio de sesión')
        }
    };


    return (
        <main className='main-login'>
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
                    <div className='header'>
                        <img className='icon-login' src="../../public/icons/Cirion_Avatar-06.png" alt="Login Icon" />
                        <h2>Login</h2>
                    </div>
                    <div className='input-container'>
                        <div className='input-box'>
                            <input className='imput-login'
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email'
                            />
                            <FontAwesomeIcon icon={faEnvelope} className='icon' />
                        </div>
                        <div className='input-box'>
                            <input className='imput-login'
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Password' required
                            />
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className='icon' onClick={() => setShowPassword(!showPassword)} />
                        </div>

                        <div className='remember-forgot'>
                            <label>
                                <input type='checkbox'
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                /> Remember me
                            </label>
                            <a href='#'>Forgot password</a>
                        </div>

                        <button type='submit'>Login</button>

                        <div className='register-link'>
                            <p>Don't have an account <Link to='/register'>Register</Link></p>
                        </div>

                    </div>
                    {error && <p className='error-message'>{error}</p>}
                </form>
            </div>
        </main>
    )
}