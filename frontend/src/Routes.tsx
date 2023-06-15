import { Route, Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import historyt from "./util/history";
import MoviesCatalog from "./pages/MoviesCatalog";

const Routes = () => {
    return (
        <Router history={historyt}>
            <Navbar />
                <Switch >
                    <Route path="/" exact>
                        <Home></Home>
                    </Route>
                    <PrivateRoute path="/movies">
                        <Route path="/movies" exact>
                            <MoviesCatalog></MoviesCatalog>
                        </Route>
                        <Route path="/movies/:movieId" exact>
                            <MovieDetails></MovieDetails>
                        </Route>
                    </PrivateRoute>
                </Switch>
        </Router>
    );
}

export default Routes;