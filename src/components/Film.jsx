import { useState, useEffect } from "react";
import { useContext } from "react";
import { FavouriteContext } from "./App";


  function Film() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetched, setIsFetched] = useState(false);
  const {favourites, setFavourites} = useContext(FavouriteContext)
 

  const initialFilms = [
    {
      title: "A New Hope",
      director: "George Lucas",
      episode_id: 4,
      image:
        "https://m.media-amazon.com/images/I/81aA7hEEykL._AC_UF894,1000_QL80_.jpg",
    },
    {
      title: "The Empire Strikes Back",
      director: "Irvin Kershner",
      episode_id: 5,
      image:
        "https://static.tvtropes.org/pmwiki/pub/images/077aefe0d1790721a0e2c8f8b370be3a.jpg",
    },
    {
      title: "Return Of The Jedi",
      director: "Richard Marquand",
      episode_id: 6,
      image: "https://i.ebayimg.com/images/g/msEAAOSwuhZelxxQ/s-l1200.jpg",
    },
    {
      title: "The Phantom Menace",
      director: "George Lucas",
      episode_id: 1,
      image:
        "https://cdnb.artstation.com/p/assets/images/images/048/195/779/large/lodgiko-8695a166-5445-41d9-826c-83acd090a607.jpg?1649426235",
    },
    {
      title: "Attack Of The Clones",
      director: "George Lucas",
      episode_id: 2,
      image: "https://i.redd.it/rx1xq27wqry61.jpg",
    },
    {
      title: "Revenge Of The Sith",
      director: "George Lucas",
      episode_id: 3,
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6360/6360019_so.jpg",
    },
    {
      title: "The Force Awakens",
      director: "J.J.Abrams",
      episode_id: 7,
      image:
        "https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg",
    },
  ];

  const fetchFilms = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (!isFetched) {
          setFilms(data.results);
          setIsFetched(true);
        }
        if (data.next) {
          fetchFilms(data.next);
        } else {
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching films", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (!isFetched) {
      fetchFilms("https://swapi.py4e.com/api/films/");
    }
  }, [isFetched]);

  const addToFavourites = (film) => {
    if (!favourites.some(f => f.title === film.title)) {
      const filmWithImage = {
        ...film,
        type: 'film',
        image: initialFilms.find(f => f.episode_id === film.episode_id)?.image
      };
      setFavourites([...favourites, filmWithImage]);
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
    <div className="film-container">
      {films.map((film, index) => (
        <div key={index} className="each-film">
          <h1 className="film-title">{film.title}</h1>
          <h2 className="director">Director: {film.director}</h2>
          <h3 className="episode">Episode: {film.episode_id}</h3>
          <div className="release-date">{film.release_date}</div>
          <img
            src={initialFilms[index].image}
            width={100}
            alt={`Image for ${film.title}`}
            className="film-image"
          />
          <button
            className="favourite-button"
            onClick={() => addToFavourites(film)} 
          >
            Favorite
          </button>
        </div>
      ))}
    </div>
  );
}
export default Film;