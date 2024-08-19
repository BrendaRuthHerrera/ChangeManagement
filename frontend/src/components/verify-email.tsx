import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyEmail = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const email = params.get('email');
        const token = params.get('token');

        if (email && token) {
            axios.get(`http://localhost:3001/verify-email?email=${email}&token=${token}`)
                .then(response => {
                    console.log('Verificación exitosa:', response.data);
                    navigate('/login');
                })
                .catch(error => {
                    console.error('Error en la verificación:', error.response.data);
            
                });
        }
    }, [navigate]);

    return (
        <div>
            Verificando tu correo electrónico...
        </div>
    );
}
export default VerifyEmail;