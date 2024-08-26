export const SeriseCard = ({ data }) => {
  const { img_url, name, rating, description, genre, cast, watch_url } = data;

  return (
    <div className="card">
      <div>
        <img 
          src={img_url} 
          alt={name} 
          className="card-image" 
        />
      </div>
      <div className="card-content">
        <h2>Name: {name}</h2>
        <h3>Rating: {rating}</h3>
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          <button className="card-button">Watch Now</button>
        </a>
      </div>
    </div>
  );
};
