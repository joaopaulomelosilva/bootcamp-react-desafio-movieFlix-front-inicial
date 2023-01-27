import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Movies from "./pages/Movies";

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <MovieDetails></MovieDetails>
                <Switch >
                </Switch>
        </BrowserRouter>
    );
}

export default Routes;