import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-52 pr-3 transition-all duration-300 ease-in-out hover:scale-110">
        <img alt="Movie list" src={IMG_CDN + posterPath} />
    </div>
  )
}

export default MovieCard