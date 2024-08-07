import { useState, useEffect } from 'react';
import '../styles/Home.css';
import Navbar from '../components/Navbar';
import Portal from '../components/Portal';
import Footer from '../components/Footer';
interface LinkData {
    id: number;
    url:string;
    title: string;
    description: string;
  }
const Home = () => {

    const [links, setLinks] =useState<LinkData[]>([]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        fetch('http://localhost:3001/api/aplicaciones', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        .then(response => response.json())
        .then(data => setLinks(data))
        .catch(error => console.error('Error loading links:', error));
    }, []);

    return (
        <main>
            <Navbar/>
            <div className='body'>
                <div className='portal-aplicaciones'><h2>Portal de Aplicaciones</h2>
                </div>
                <Portal links={links} />
            </div>
            <Footer/>
        </main>
    )
}

export default Home;