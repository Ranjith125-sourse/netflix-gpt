import React, { useState } from 'react'
import { IMG_CDN } from '../utils/constants'
import Trailer from './Trailer';

const MovieCard = ({posterPath, movieId}) => {

  const [showTrailer, setShowTrailer] = useState(false);

  const handleMovieId = () => {
    console.log(movieId);
    setShowTrailer(true);
  }

  if(!posterPath) return null;
  return (
    <div className="w-36 md:w-52 pr-3 transition-transform duration-300 ease-in-out hover:scale-95">
        <img alt="Movie list" src={IMG_CDN + posterPath} onClick={()=>handleMovieId(movieId)} />
        {showTrailer && <Trailer movieId={movieId} />}
    </div>
  )
}

export default MovieCard