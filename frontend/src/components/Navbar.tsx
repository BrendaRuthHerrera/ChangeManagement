import '../styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo'>
                <h1>Changes Management</h1>
            </div>
            <div className="navbar-items">
                <div className="icon">
                    <FontAwesomeIcon icon={faBars} size='1x' />
                </div>
            </div>
        </div>
    )
}
