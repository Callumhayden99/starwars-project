import { useState, useEffect, useContext } from 'react';
import { FavouriteContext } from './App';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [genderFilter, setGenderFilter] = useState("");
  const [maxWeightFilter, setMaxWeightFilter] = useState(200);
  const { favourites, setFavourites } = useContext(FavouriteContext);

  useEffect(() => {
    fetchCharacters("https://swapi.py4e.com/api/people/");
  }, []);

  const fetchCharacters = (url, accumulatedCharacters = []) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const updatedCharacters = accumulatedCharacters.concat(data.results);
        if (data.next) {
          fetchCharacters(data.next, updatedCharacters);
        } else {
          setCharacters(updatedCharacters);
          setIsLoading(false);
        }
      })
      .catch(error => {
        console.error("Error fetching characters", error);
        setIsLoading(false);
      });
  };

  const addToFavourites = character => {
    console.log("Adding to favourites:", character);
    if (!favourites.some(favCharacter => favCharacter.name === character.name)) {
      setFavourites([...favourites, { ...character, type: 'character' }]);
    }
  };

  if (isLoading) {
    return <div className="loading">Loading characters...</div>;
  }

  return (
    <div className="content-container">
      <div className="filters">
        <form>
          <div>
            <label className="gender-filter">Gender:</label>
            <select
              id="gender-filter"
              onChange={e => setGenderFilter(e.target.value)}
              value={genderFilter}
            >
              <option value="">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="n/a">N/A</option>
            </select>
          </div>
          <div>
            <label className="weight-filter-color" htmlFor="weight-filter">
              Max Weight (KG): {maxWeightFilter}
            </label>
            <input
              id="weight-filter"
              type="range"
              min="0"
              max="200"
              onChange={e => setMaxWeightFilter(e.target.value)}
              value={maxWeightFilter}
            />
          </div>
        </form>
      </div>
      <div className="person-container">
        {characters
          .filter(character => {
            const characterWeight = character.mass === "unknown" ? 0 : parseInt(character.mass, 10);
            return (
              (genderFilter === "" || character.gender === genderFilter) &&
              (maxWeightFilter === "" || characterWeight <= maxWeightFilter)
            );
          })
          .map((character, index) => {
            console.log("Rendering character:", character); // Log each character
            return (
              <div key={index} className="person">
                <div className="person-title">
                  <div className="name">Name:</div>
                  {character.name}
                </div>
                <div className="gender">
                  <div className="gender-color">Gender:</div>
                  {character.gender}
                </div>
                <div className="height">
                  <div className="height-color">Height:</div>
                  {character.height} CM
                </div>
                <div className="birth-year">
                  <div className="birth-year-color">DOB:</div>
                  {character.birth_year}
                </div>
                <div className="mass">
                  <div className="mass-color">Weight:</div>
                  {character.mass} KG
                </div>
                <button
                  className="favourite-button-characters"
                  onClick={() => addToFavourites(character)}
                >
                  Favourite
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Characters;