export const SeriseCard = ({ data }) => {
  const { img_url, name, rating, description, genre, cast, watch_url } = data;

  return (
    <>
      <div>
        <img 
          src={img_url} 
          alt={name} 
          width="40%" 
          height="40%" 
        />
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating: {rating}</h3>
      <p>Summary: {description}</p>
      <p>Genre: {genre}</p>
      <p>Cast: {cast}</p>
      <a href={watch_url} target="_blank" rel="noopener noreferrer"> {/* Fix: target='_blank' and added rel */}
        <button>Watch Now</button>
      </a>
    </>
  );
};
