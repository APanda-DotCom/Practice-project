import seriseData from "../api/seriseData.json";
import { SeriseCard } from "./SeriseCard"; 

const NetflixSeries = () => {
  return (
    <>
      {seriseData.map((curElem) => (
        <SeriseCard key={curElem.id} data={curElem} /> 
      ))}
    </>
  );
};

export default NetflixSeries;
