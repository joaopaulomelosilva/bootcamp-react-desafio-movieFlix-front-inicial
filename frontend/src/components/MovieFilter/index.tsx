import './styles.css';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { BASE_URL, requestBackend } from '../../util/requests';
import { Genre } from '../../types/Genre';
import { AxiosRequestConfig } from 'axios';


const MovieFilter = () => {

    const [selectGenres, setSelectGenres] = useState<Genre[]>([]);

    const {
        handleSubmit,
        control,
    } = useForm<Genre>();

    const onSubmit = (formData : Genre) => {
        console.log(formData.id);
    }

    useEffect(() => {
        requestBackend({url: '/genres', withCredentials: true})
        .then(response => {
            setSelectGenres(response.data.content);
        }).catch(() => {console.log("erro")})
    }, []);

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="movie-filter-container">

            <Controller
                name='name'
                rules={{required: true}}
                control={control}
                render={({field}) => (

                    <Select {...field}
                    options={selectGenres}
                    classNamePrefix="movie-filter-container-select"
                    
                    getOptionLabel={(genre: Genre) => genre.name}
                    getOptionValue={(genre: Genre) => String(genre.id)}
                    />

                )}
            />

            
        </form>
        
    );
}

export default MovieFilter;