import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => 
      <div>
        <h2>Name: {actor.name}</h2>
        <h4>Movies: </h4>
        {actor.movies.map(movie => <ul>{movie}</ul>)}
      </div>)
        
      }
    </div>
  );
};

export default Actors;
