import React from 'react';
import { actors } from '../data';

const Actors = (props) => {
  const actorPage = () => {
    return(
      actors.map(actor => {
        return (
          <div className="actor">
            <p>{actor.name}</p>
            <ul>
              {actor.movies.map(mov => {
                return <li>{mov}</li>
              })}
            </ul>
          </div>
        )
      })
    )
  }
  return (
    <div>
      <h1>Actors Page</h1>
      {actorPage()}
    </div>
  );
};

export default Actors;
