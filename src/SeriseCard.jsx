export const seriseCard =({data}) => {

const{img_url,name,rating,description,genre,cast,watch_url}= data;

    return (
     <>
      <div>
       <img 
       src={img_url} 
       alt="" 
       width="40%"
       height="40%"/>
    </div>
    <h2>Name:{name} </h2>
    <h3>Rating:{rating}</h3>
    <p>Summary:{description} </p>
    <p>Genre:{genre}</p>
    <p>Cast:{cast}</p>
    <a href={watch_url} target='blank'>
    <button> watch Now</button>
    </a>
   </>
    )
  }


export default seriseCard
