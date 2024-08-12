import React, { useState } from 'react';
import '../styles/Navbar.css';


interface SearchProps {
    onSearch: (searchTerm: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');


    const handleSearch = () => {
        onSearch(searchTerm);
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