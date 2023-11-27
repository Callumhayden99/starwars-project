import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import LeftMenu from "./Leftmenu";
import HeaderNav from "./HeaderNav";
import HomePageContent from "./HomePageContent";
import Film from "./Film";
import Characters from "./Characters";
import Planets from "./Planets";
import Favourite from "./Favourite";
import Signup from "./Signup";
import "../App.css";
import { createContext } from "react";

const FavouriteContext = createContext()

function App() {
  const location = useLocation();
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const bodyStyle = document.body.style;
    switch (location.pathname) {
      case "/films":
        bodyStyle.backgroundImage =
          "url('https://wallpapercave.com/wp/wp3724194.jpg')";
        break;
      case "/characters":
        bodyStyle.backgroundImage = "url('https://i.imgur.com/MQBYaZJ.jpg')";
        break;
      case "/planets":
        bodyStyle.backgroundImage =
          "url('https://blenderartists.org/uploads/default/original/4X/1/4/9/149656191a23e6974f9cbf29eaf03db5a052e825.jpg')";
        break;
      case "/favourite":
        bodyStyle.backgroundImage =
          "url('https://wallpapers.com/images/hd/hoth-1920-x-1080-wallpaper-ym7zivl8k8dmpywy.jpg')";
        break;
      case "/signup":
        bodyStyle.backgroundImage =
          "url('https://wallpapers.com/images/hd/endor-1920-x-1080-wallpaper-es5s21u9bzt7dawl.jpg')";
        break;
      default:
        bodyStyle.backgroundImage =
          "url('https://images.alphacoders.com/270/270241.jpg')";
    }
  }, [location]);

  return (
    <div className="container">
      <FavouriteContext.Provider value={{favourites, setFavourites}}>
      <Header />
      <HeaderNav />
      <main>
        <LeftMenu />
        <Routes>
          <Route path="/" element={<HomePageContent />} />
          <Route
            path="/films"
            element={<Film setFavourites={setFavourites} />}
          />
          <Route
            path="/characters"
            element={<Characters setFavourites={setFavourites} />}
          />
          <Route
            path="/planets"
            element={<Planets setFavourites={setFavourites} />}
          />
          <Route
            path="/favourite"
            element={<Favourite favourites={favourites} />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      </FavouriteContext.Provider>
    </div>
  );
}

export { App, FavouriteContext};
