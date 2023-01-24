import { Link, NavLink } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
    return(
        <nav className='navbar-container'>
            <Link to="/"><h1>MovieFlix</h1></Link>
        </nav>
    );
}

export default Navbar;