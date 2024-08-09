import { useState, useEffect } from 'react';
import '../styles/Home.css';
import Navbar from '../components/Navbar';
import Portal from '../components/Portal';
import Footer from '../components/Footer';
import Search from '../components/search';

interface App {
    id: number;
    url:string;
    nombre: string;
    descripcion: string;
  }
  
const Home = () => {

    const [links, setLinks] =useState<App[]>([]);

    const handleSearch = (results: App[]) => {
        setLinks(results);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');

        fetch('http://localhost:3001/api/aplicaciones', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        .then(response => response.json())
        .then(data => setLinks(data.data || []))
        .catch(error => console.error('Error loading links:', error));
    }, []);

    return (
        <main>
            <Navbar/>
            <div className='body'>
            <Search onSearch={handleSearch} />
                <div className='portal-aplicaciones'><h2>Portal de Aplicaciones</h2>
                </div>
                <Portal links={links} />
            </div>
            <Footer/>
        </main>
    )
}

export default Home;