import { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import history from '../../util/history';
import { getTokenData, isAuthenticated, removeAuthData } from '../../util/requests/requests';
import './styles.css';

const Navbar = () => {

    const { authContextData, setAuthContextData } = useContext(AuthContext);
    
    useEffect(() => {

        if(isAuthenticated()){
            setAuthContextData({
                authenticated: true,
                tokenData: getTokenData()
            })
        }
        else{
            setAuthContextData({
                authenticated: false,
            })
        }
    }, [setAuthContextData])

    const handleLogoutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        removeAuthData();
        setAuthContextData({
            authenticated: false,
        })
        history.replace("/");
    }

    return(

        <nav className='navbar-container'>
            <NavLink to="/"><h1>MovieFlix</h1></NavLink>

            { authContextData.authenticated && 
                <>
                    <span>{authContextData.tokenData?.user_name}</span>
                    <button onClick={handleLogoutClick}>LOGOUT</button>
                </>
            }
        </nav>
    );
}

export default Navbar;