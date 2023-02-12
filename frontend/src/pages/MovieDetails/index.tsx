import './styles.css';
import { useEffect, useState } from 'react';
import  { AxiosRequestConfig } from 'axios';
import { hasAnyRoles, requestBackend } from '../../util/requests/requests';
import { useParams } from 'react-router-dom';
import { Review } from '../../types/review';
import MovieReviews from '../../components/MovieReviews';
import ReviewForm from '../../components/ReviewForm';

type urlParams = {
    movieId: string;
}


const MovieDetails = () => {

    const { movieId } = useParams<urlParams>();

    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {

        const params : AxiosRequestConfig = {
            method: 'GET',
            url: `/movies/${movieId}/reviews`,
            withCredentials: true,
        }

        requestBackend(params)
            .then( response => {
                setReviews(response.data);
        })

    }, [movieId]);

    const handleInsertReview = (review: Review) => {
        const clone = [...reviews];
        clone.push(review);setReviews(clone);
    }

    return (
        <main className='details-screen'>
            <h1>Tela detalhes do filme id: {movieId} </h1>
            
            {hasAnyRoles(['ROLE_MEMBER']) &&(
                <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />
            )}
            
            <MovieReviews reviews={reviews}></MovieReviews>
            
        </main>
    );
}

export default MovieDetails;