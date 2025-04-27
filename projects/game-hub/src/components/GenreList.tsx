import { ul } from 'framer-motion/client';
import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres';

const GenreList = () => {
 
    const {genres: data} = useGenres();

    return (
        <ul>
            {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
    )
  
}

export default GenreList