import Routes from './Routes';
import './App.css';
import { AuthContextData, AuthContext } from './AuthContext';
import { useState } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false
  })

  return (
    <AuthContext.Provider value={{authContextData, setAuthContextData}}>
      <Routes />
      <ToastContainer />
    </AuthContext.Provider>
  );
}

export default App;
