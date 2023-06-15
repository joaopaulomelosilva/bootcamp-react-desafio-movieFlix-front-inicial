import './styles.css';
import { Movie } from '../../types/movie';
import { requestBackend } from '../../util/requests';
import { useEffect, useState } from 'react';
import { SpringPage } from '../../types/vendor/spring';
import MovieCard from '../../components/MovieCard';
import { AxiosRequestConfig } from 'axios';
import Pagination from '../../components/Pagination';
import MovieFilter from '../../components/MovieFilter';

const MoviesCatalog = () => {

    const [page, setPage] = useState<SpringPage<Movie>>();

    const getMovies = (pageNumber: number) => {
        const params : AxiosRequestConfig = {
            method: 'GET',
            url: `/movies`,
            withCredentials: true,
            params: {
                page: pageNumber,
                size: 4,
            },
        }

        requestBackend(params)
        .then(response => {
            setPage(response.data);
        });
    }
    
    useEffect(() => {
        getMovies(0);
    }, []);

    return (
        <main className='movies-container container'>

            <MovieFilter />

            <div className="row w-100 d-flex justify-content-center">

                {page?.content.map((movie) => (

                <div className="col-sm-6 col-xl-3">
                    <div className='movies-content' key={movie.id}>
                        <MovieCard id={movie.id} name={movie.title} year={movie.year} subTitle={ (movie.subTitle) ? movie.subTitle : "SubTitle"} imgUrl={movie.imgUrl}></MovieCard>
                    </div>
                </div>
                ))}

            </div>
            <Pagination 
            pageCount={ (page) ? page.totalPages : 0} 
            range={3}
            onChange={getMovies}
            ></Pagination>
        </main>
    );
}

export default MoviesCatalog;