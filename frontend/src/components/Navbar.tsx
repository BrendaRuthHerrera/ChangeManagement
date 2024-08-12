import '../styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Search from './search';


interface NavbarProps {
    onSearch: (searchTerm: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {

    return (
        <div className='navbar'>
            <div className='container-logo'>
            <img className='logo' src="../../icons/Cirion-RGB_negativo-fondo-transp - copia.png" alt="Logo de la empresa"/>
            </div>
            <div className="navbar-items">
                <div>
                <Search onSearch={onSearch} />
                </div>
                <div className="icon">
                    <FontAwesomeIcon icon={faBars} size='1x' />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
