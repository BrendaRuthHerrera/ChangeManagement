import React, { useState, useEffect } from 'react';
import App from './interfaces';
import '../styles/Navbar.css';


interface SearchProps {
    onSearch: (results: App[]) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [allApps, setAllApps] = useState<App[]>([]);

    useEffect(() => {

        const token = localStorage.getItem('token');

        fetch('http://localhost:3001/api/aplicaciones', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        .then(Response => Response.json())
        .then(data => setAllApps(data.data || []))
        .catch(error => console.error('Error loading apps:', error));
    }, []);

    function searchApps(searchTerm: string): App[] {
        return allApps.filter((app: App) =>
            app.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
       
    }

    const handleSearch = () => {
        const results = searchApps(searchTerm);
        onSearch(results);
    };

    return (
        <div className='container-search'>
            <input className='input-search'
                type="text"
                placeholder="Buscar aplicaciones"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    );
};

export default Search;