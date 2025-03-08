import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggession from './GptMovieSuggession'
import { BG_IMAGE } from '../utils/constants'

const GptSearch = () => {
  return (
    <div className="w-screen">
      <div className="absolute -z-10">
        <img
          src={BG_IMAGE}
          alt="BackgroundImage"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggession />
    </div>
  )
}

export default GptSearch