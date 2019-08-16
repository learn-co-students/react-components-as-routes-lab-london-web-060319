import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const moviePage = () => {
    return movies.map(mov => {
      return(
        <div>
          <p>{mov.title}</p>
          <p>{mov.time}</p>
          <ul>{mov.genres.map(genre => {
            return <li>{genre}</li>
          })}
          </ul>
        </div>
      )
    })
  }
  return (
    <div>
      <h1>Movies Page</h1>
        {moviePage()}
    </div>
  );
};

export default Movies;
