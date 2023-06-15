import './styles.css';
import { useEffect, useState } from 'react';
import  { AxiosRequestConfig } from 'axios';
import { requestBackend } from '../../util/requests';
import { useParams } from 'react-router-dom';
import { Review } from '../../types/review';
import MovieReviews from '../../components/MovieReviews';
import ReviewForm from '../../components/ReviewForm';
import { hasAnyRoles } from '../../util/auth';

import imageTeste from '../../assets/images/image 2.png'

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

            <div className="movie-details-screen">
                <div className="image-movie-container">
                    <img src={imageTeste} alt="" />
                </div>
                
                <div className="movie-details-screen-description">
                    <h2>O retorno do rei</h2>
                    <h4 className='movie-card-description-year'>2013</h4>
                    <p>O olho do inimigo está se movendo.</p>
                    <br />
                    <div className='movie-sinopse'>
                        <p>
                            O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima. 
                            Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, o que faz com que Gandalf e Pippin partam para o local na intenção de ajudar a resistência. 
                            Um exército é reunido por Theoden em Rohan, em mais uma tentativa de deter as forças de Sauron. 
                            Enquanto isso, Frodo, Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o anel.
                        </p>
                    
                    </div>
                </div>
            </div>
            
            
            {hasAnyRoles(['ROLE_MEMBER']) &&(
                <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />
            )}
            
            <MovieReviews reviews={reviews}></MovieReviews>
            
        </main>
    );
}

export default MovieDetails;