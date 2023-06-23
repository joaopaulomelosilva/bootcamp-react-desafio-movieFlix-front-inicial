import './styles.css';
import { Movie } from '../../types/movie';
import { requestBackend } from '../../util/requests';
import { useCallback, useEffect, useState } from 'react';
import { SpringPage } from '../../types/vendor/spring';
import MovieCard from '../../components/MovieCard';
import { AxiosRequestConfig } from 'axios';
import Pagination from '../../components/Pagination';
import MovieFilter, { GenreFilterData } from '../../components/MovieFilter';

type ControlComponentsData = {
    activePage: number;
    filterGenreData: GenreFilterData;
}

const MoviesCatalog = () => {

    const [page, setPage] = useState<SpringPage<Movie>>();

    const [controlComponentsData, setControlComponentsData] = useState<ControlComponentsData>(
        {
            activePage: 0,
            filterGenreData: {genre: null}
        }
    );

    const handlePageChange = (pageNumber: number) => {
        setControlComponentsData({activePage: pageNumber, filterGenreData: controlComponentsData.filterGenreData});
    };

    const handleSubmitFilter = (data : GenreFilterData) => {
        setControlComponentsData({activePage: 0, filterGenreData: data});
    };

    const getMovies = useCallback(() => {
        const params : AxiosRequestConfig = {
            method: 'GET',
            url: `/movies`,
            withCredentials: true,
            params: {
                page: controlComponentsData.activePage,
                size: 4,
                genreId: controlComponentsData.filterGenreData.genre?.id
            },
        }

        requestBackend(params)
        .then(response => {
            setPage(response.data);
        });
    } , [controlComponentsData]);
    
    useEffect(() => {
        getMovies();
    }, [getMovies]);

    return (
        <main className='movies-container container'>

            <MovieFilter onSubmitFilter={handleSubmitFilter} />

            <div className="row w-100 d-flex">

                {page?.content.map((movie) => (

                <div className="col-sm-6 col-xl-3 p-0" key={movie.id}>
                    <div className='movies-content'>
                        <MovieCard id={movie.id} name={movie.title} year={movie.year} subTitle={ (movie.subTitle) ? movie.subTitle : "SubTitle"} imgUrl={movie.imgUrl}></MovieCard>
                    </div>
                </div>
                ))}

            </div>
            <Pagination 
                pageCount={ (page) ? page.totalPages : 0} 
                range={3}
                onChange={handlePageChange}
            ></Pagination>
        </main>
    );
}

export default MoviesCatalog;