import { Link } from 'react-router-dom';
import './styles.css';

type Props = {
    id: number;
}

const MovieCard = ( { id } : Props) => {

    return(
        <Link to={'movies/' + id}><p>Acessar/movies/{id}</p></Link>
    );
}

export default MovieCard;