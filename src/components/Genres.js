import React, { useEffect} from 'react'
import axios from 'axios'
import { Chip } from "@material-ui/core";

export const Genres = ({  selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage,}) => {

    // The function below removes from the previous array and then adds up to the selected genres array.
        const handleAdd = (genre) => {
            setSelectedGenres([...selectedGenres, genre])  //Arranges the selected genres before other genres
            setGenres(genres.filter((g) => g.id !== genre.id));  //Removes the chosen genre from the previous array..
            setPage(1);
        }

        const handleDelete = (genre) => {
          setSelectedGenres(selectedGenres.filter((selected) => selected.id !== genre.id));
          setGenres([...genres, genre]);
          setPage(1);
        };

    const fetchGenres = async() => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`) 
    
        setGenres(data.genres)
    };

    console.log(genres);

    useEffect(() => {
      fetchGenres();
    
    //Whenever the pages are being changed, the api_key call should be cancelled (ie. unmounting the Genres component)
    // return () => {    
    //     setGenres({});
    //   };
    }, [])
    
  return (
    <div style={{padding: '6px 0'}}>
        {selectedGenres && selectedGenres.map((genre) => (
        <Chip 
            label={genre.name}
            style={{margin: 2}}
            size='small'
            key={genre.id}
            clickable
            onDelete={() => handleDelete(genre)}
            color='primary'
            />) ) }

       {genres && genres.map((genre) => (
        <Chip 
            label={genre.name}
            style={{margin: 2}}
            size='small'
            key={genre.id}
            clickable
            onClick={() => handleAdd(genre)}/>) ) }
    </div>
  )
}
