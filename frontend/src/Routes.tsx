import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";


const Routes = () => {

    return(
        <BrowserRouter>
        <Navbar></Navbar>
            <Switch>
                
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;