import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const dicPage = () => {
    return(
      directors.map(dic => {
        return (
          <div className="actor">
            <p>{dic.name}</p>
            <ul>
              {dic.movies.map(mov => {
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
      <h1>Directors Page</h1>
      {dicPage()}
    </div>
  );
}

export default Directors
