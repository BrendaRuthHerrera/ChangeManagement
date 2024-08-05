import React, { useState } from 'react';
import linkJSON from '../../public/links.json';
import App from './interfaces';
import '../styles/Navbar.css';

interface SearchProps {
    onSearch: (results: App[]) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    function searchApps(searchTerm: string): App[] {
        const results: App[] = linkJSON.filter((app: App) =>
            app.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return results;
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