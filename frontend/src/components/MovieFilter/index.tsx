import './styles.css';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { requestBackend } from '../../util/requests';
import { Genre } from '../../types/Genre';

export type GenreFilterData = {
    genre: Genre | null;
}

type Props = {
    onSubmitFilter : (data: GenreFilterData) => void;
}

const MovieFilter = ( {onSubmitFilter} : Props ) => {

    const [selectGenres, setSelectGenres] = useState<Genre[]>([]);

    const { handleSubmit, control, setValue, getValues } = useForm<GenreFilterData>();

    const onSubmit = (formData : GenreFilterData) => {
        onSubmitFilter(formData);
    };

    const handleChangeGenre = (value: Genre) => {

        setValue('genre', value);

        const obj: GenreFilterData = {
            genre: getValues('genre')
        }
        
        onSubmitFilter(obj);
    };

    useEffect(() => {
        requestBackend({url: '/genres', withCredentials: true})
        .then(response => {
            setSelectGenres(response.data);
        })
    }, []);

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="movie-filter-container">

                    <Controller
                        name='genre'
                        control={control}
                        render={({field}) => (

                            <Select {...field}
                                options={selectGenres}
                                classNamePrefix="movie-filter-container-select"
                                isClearable

                                onChange={value => handleChangeGenre(value as Genre)}

                                getOptionLabel={(genre: Genre) => genre.name}
                                getOptionValue={(genre: Genre) => String(genre.id)}
                                placeholder="Gêneros"
                            />

                        )}
                    />
            
        </form>
        
    );
}

export default MovieFilter;