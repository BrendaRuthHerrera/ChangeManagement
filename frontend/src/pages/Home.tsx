import { useState, useEffect } from 'react';
import '../styles/Home.css';
import Navbar from '../components/Navbar';
import Portal from '../components/Portal';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';


interface App {
    id: number;
    url:string;
    nombre: string;
    descripcion: string;
  }
  
const Home = () => {

    const [links, setLinks] =useState<App[]>([]);

    const [allApps, setAllApps] = useState<App[]>([]);
    const navigate = useNavigate();

    const handleSearch = (searchTerm: string) => {
        const filteredApps = allApps.filter(app =>
            app.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setLinks(filteredApps);
    };
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
           navigate('/login');
           return;
        }

        fetch('http://localhost:3001/api/aplicaciones', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })

        .then(response => {
        if (!response.ok) {
            throw new Error('Token no válido');
        }
        return response.json();
    })
        .then(data => {
            setLinks(data.data || []);
            setAllApps(data.data || []);
        })
        .catch(error => {
            console.error('Error loading links:', error);
            navigate('/login');
        });
    }, [navigate]);

   

    return (
        <main>
            <Navbar onSearch={handleSearch} />
            <div className='body'>
                <div className='portal-aplicaciones'><h2>Changes Management</h2>
                </div>
                <Portal links={links} />
            </div>
            <Footer/>
        </main>
    )
}

export default Home;