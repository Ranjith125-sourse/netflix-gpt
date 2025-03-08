import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-52 pr-3">
        <img alt="Movie list" src={IMG_CDN + posterPath} />
    </div>
  )
}

export default MovieCard