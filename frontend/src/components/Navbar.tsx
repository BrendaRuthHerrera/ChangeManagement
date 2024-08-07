import '../styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Search from './search';
import App from './interfaces';

const Navbar: React.FC = () => {

    const handleSearchResults = (results: App[]) => {
        console.log(results);
    };
    return (
        <div className='navbar'>
            <div className='container-logo'>
            <img className='logo' src="../../icons/Cirion-RGB_negativo-fondo-transp - copia.png" alt="Logo de la empresa"/>
            </div>
            <div className="navbar-items">
                <div>
                <Search onSearch={handleSearchResults} />
                </div>
                <div className="icon">
                    <FontAwesomeIcon icon={faBars} size='1x' />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
