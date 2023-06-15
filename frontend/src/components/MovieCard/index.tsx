import { Link } from 'react-router-dom';
import './styles.css';

type Props = {
    id: number;
    name: string;
    imgUrl: string;
    subTitle: string;
    year: number;
}

const MovieCard = ( { id, name, imgUrl, subTitle, year } : Props) => {

    return(
        <div className='movie-card-conteiner movie-card'>
            <Link to={'movies/' + id}><img src={imgUrl} alt={name} /></Link>
            <div className="movie-card-descrption">
                <h2>{name}</h2>
                <h4 className='movie-card-description-year'>{year}</h4>
                <p>{subTitle}</p>
            </div>
        </div>
        
    );
}

export default MovieCard;