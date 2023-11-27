import { useState, useEffect } from "react";
import { useContext } from "react";
import { FavouriteContext } from "./App";
import Favourite from "./Favourite"

 export default function Planets() {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {favourites, setFavourites}= useContext(FavouriteContext)
  

  const fetchPlanets = (url, accumulatedPlanets = []) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const updatedPlanets = accumulatedPlanets.concat(data.results);
        if (data.next) {
          fetchPlanets(data.next, updatedPlanets); 
        } else {
          setPlanets(updatedPlanets);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching planets", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchPlanets("https://swapi.py4e.com/api/planets/");
  }, []);

  const addToFavourites = (planet) => {
    if (!favourites.some((favPlanet) => favPlanet.name === planet.name)) {
      setFavourites([...favourites, { ...planet, type: 'planet' }]);
    }
  };


  if (isLoading) {
    return (
      <div className="loading">
        A long time ago in a galaxy far, far away, please wait...
      </div>
    );
  }

  return (
    <div className="planet-container">
      {planets.map((planet) => (
        <div key={planet.name} className="planet"> 

          <div className="planet-name">
            <div className="planet-name-color">Name: </div>
          {planet.name}
          </div>

          <div className="planet-population">
            <div className="population-color">Population: </div>
          {planet.population}
          </div>

          <div className="planet-terrain">
            <div className="terrain-color">Terrain: </div>
          {planet.terrain}
          </div>

          <div className="planet-climate">
            <div className="climate-color">Climate: </div>
          {planet.climate}
          </div>

          <div className="planet-film">
            <div className="planet-film-color">Films: </div>
          {planet.films.length}
          </div> 
          <button
            className="favourite-button-planet"
            onClick={() => addToFavourites(planet)}>Favourite
          </button>
        </div>
      ))}
       <Favourite favourites={favourites} />
    </div>
  );
}
