import React from 'react';
import seriseData from "./api/seriseData.json"

const NetflixSeries = () => {
 
  return (
   <ul>
    {
      seriseData.map( (curElem)  =>{
      return(
          <li key={curElem.id}>
      <div>
        <img 
        src={curElem.img_url} 
        alt="" 
        width="40%"
        height="40%"/>
     </div>
     <h2>Name:{curElem.name} </h2>
     <h3>Rating:{curElem.rating}</h3>
     <p>Summary:{curElem.description} </p>
     <p>Genre:{curElem.genre}</p>
     <p>Cast:{curElem.cast}</p>
     <a href={curElem.watch_url} target='blank'>
     <button> watch Now</button>
     </a>
    </li>
      )
      })
    }
  </ul>
  )
}

export default NetflixSeries
