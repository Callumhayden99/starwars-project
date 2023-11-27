import { useContext } from 'react';
import { FavouriteContext } from './App';

function Favourite() {
  const { favourites, setFavourites } = useContext(FavouriteContext);

  const handleRemove = (itemToRemove) => {
    setFavourites(favourites.filter(item => item !== itemToRemove));
  };

  return (
    <div className="favourite-container">
      {favourites.map((item, index) => {
        if (item.type === 'film') {
          return (
            <div key={index} className="each-film">
              <h1 className="film-title">{item.title}</h1>
              <h2 className="director">Director: {item.director}</h2>
              <h3 className="episode">Episode: {item.episode_id}</h3>
              <div className="release-date">{item.release_date}</div>
              <img
                src={item.image}
                width={100}
                alt={`Image for ${item.title}`}
                className="film-image"
              />
             <button className='remove' onClick={() => handleRemove(item)}>Remove</button>
            </div>
          );
        } else if (item.type === 'character') {
          return (
            <div key={index} className="person">
             <div className="person-title">
                  <div className="name">Name:</div>
                  {item.name}
                </div>
                <div className="gender">
                  <div className="gender-color">Gender:</div>
                  {item.gender}
                </div>
                <div className="height">
                  <div className="height-color">Height:</div>
                  {item.height} CM
                </div>
                <div className="birth-year">
                  <div className="birth-year-color">DOB:</div>
                  {item.birth_year}
                </div>
                <div className="mass">
                  <div className="mass-color">Weight:</div>
                  {item.mass} KG
                </div>
                <button className='remove' onClick={() => handleRemove(item)}>Remove</button>
            </div>
          );
        } else if (item.type === 'planet') {
          return (
            <div key={index} className="planet">
                 <div className="planet-name">
            <div className="planet-name-color">Name: </div>
          {item.name}
          </div>

          <div className="planet-population">
            <div className="population-color">Population: </div>
          {item.population}
          </div>

          <div className="planet-terrain">
            <div className="terrain-color">Terrain: </div>
          {item.terrain}
          </div>

          <div className="planet-climate">
            <div className="climate-color">Climate: </div>
          {item.climate}
          </div>

          <div className="planet-film">
            <div className="planet-film-color">Films: </div>
          {item.films.length}
          </div> 
          <button className='remove' onClick={() => handleRemove(item)}>Remove</button>
        </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default Favourite;
