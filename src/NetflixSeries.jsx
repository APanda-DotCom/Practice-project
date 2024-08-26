
import seriseData from "./api/seriseData.json";


const NetflixSeries = () => {
  return (
    <>
    {seriseData.map ((curElem) =>{
        <seriseCard key={curElem.id} data ={curElem}/>
      })
    }
  
    </>
  );
};

export default NetflixSeries


