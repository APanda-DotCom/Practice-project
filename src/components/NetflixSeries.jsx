import seriseData from "../api/seriseData.json";
import { SeriseCard } from "./SeriseCard"; 

const NetflixSeries = () => {
  return (
    <div className="container">
      <ul className="grid grid-three-cols"> {/* Updated className */}
        {seriseData.map((curElem) => (
          <li key={curElem.id} className="card"> {/* Wrapped each SeriseCard in an li element */}
            <SeriseCard data={curElem} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NetflixSeries;
