import './styles.css';
import { useCallback, useEffect, useState } from 'react';
import  { AxiosRequestConfig } from 'axios';
import { requestBackend } from '../../util/requests';
import { useParams } from 'react-router-dom';
import { Review } from '../../types/review';
import MovieReviews from '../../components/MovieReviews';
import ReviewForm from '../../components/ReviewForm';
import { hasAnyRoles } from '../../util/auth';
import { Movie } from '../../types/movie';

type urlParams = {
    movieId: string;
}

const MovieDetails = () => {

    const { movieId } = useParams<urlParams>();

    const [reviews, setReviews] = useState<Review[]>([]);

    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {

        const params : AxiosRequestConfig = {
            method: 'GET',
            url: `/movies/${movieId}`,
            withCredentials: true,
        }

        requestBackend(params)
            .then( response => {
                setMovie(response.data);
        })

    }, [movieId]);

    const handleInsertReview = (review: Review) => {
        const clone = [...reviews];
        clone.push(review);setReviews(clone);
    }

    const getRewiews = useCallback(() => {
        const params : AxiosRequestConfig = {
            method: 'GET',
            url: `/movies/${movieId}/reviews`,
            withCredentials: true,
        }

        requestBackend(params)
            .then( response => {
                setReviews(response.data);
        }).catch(error => {
                console.error(error);
            }
        );
    },[movieId])

    useEffect(() => {
        getRewiews();
    }, [getRewiews]);

    return (
        <main className='details-screen'>

            <div className="movie-details-screen">
                <div className="image-movie-container">
                    <img src={movie?.imgUrl} alt={movie?.title} />
                </div>
                <div className="movie-details-screen-description">
                    <h2>{movie?.title}</h2>
                    <h4 className='movie-card-description-year'>{movie?.year}</h4>
                    <p>{movie?.subTitle}</p>
                    <br />
                    <div className='movie-sinopse'>
                        <p>
                            {movie?.synopsis}
                        </p>
                    </div>
                </div>
            </div>
            
            {hasAnyRoles(['ROLE_MEMBER']) &&(
                <ReviewForm movieId={movieId} 
                onInsertReview={handleInsertReview}
                onReloadReviews={() => getRewiews}
                />
            )}
            
            <MovieReviews reviews={reviews}></MovieReviews>
            
        </main>
    );
}

export default MovieDetails;