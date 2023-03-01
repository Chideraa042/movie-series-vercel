import axios from 'axios'
import React, { useState, useEffect }from 'react'
import { SingleContent } from '../../components/SingleContent/SingleContent';
import { CustomPagination } from '../../components/Pagination/CustomPagination';
import { Genres } from '../../components/Genres';
import { useGenres } from '../../hooks/useGenres';

export const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState()
// Setting the Genres' states...
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
// Custom Hook (Use Genre)...
  const genreforURL = useGenres(selectedGenres)

  const fetchMovies = async() => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`) 
  

    // console.log(data)
    setContent(data.results)
    setNumOfPages(data.total_pages)
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [page, genreforURL])

  return (
    <div>
        <span className='pageTitle'>Movies</span>

      {/* Setting the Genres */}
        <Genres
          type='movie'
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          genres={genres}
          setGenres={setGenres}
          setPage={setPage}
        />
        <div className='trending'>
          {
            content && content.map((c) => <SingleContent 
              key={c.id} 
              poster={c.poster_path} 
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type='movie'
              vote_average={c.vote_average}
              />)
          }
        </div>
        {numOfPages > 1 && (
          <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
        )}
        
    </div>
  )
}
