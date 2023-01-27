import { NavLink } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
    return(
        <nav className='navbar-container'>
            <NavLink to="/"><h1>MovieFlix</h1></NavLink>
            <button>SAIR</button>
        </nav>
    );
}

export default Navbar;