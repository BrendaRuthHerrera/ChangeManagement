import React, { useState, useEffect } from 'react';
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
        fetch('./links.json')
        .then(response => response.json())
        .then(data => setLinks(data))
        .catch(error => console.error('Error loading links:', error));
    }, []);

    return (
        <main>
            <Navbar/>
            <body>
                <div className='portal-aplicaciones'><h2>Portal de Aplicaciones</h2>
                </div>
                <Portal links={links} />
            </body>
            <Footer/>
        </main>
    )
}

export default Home;