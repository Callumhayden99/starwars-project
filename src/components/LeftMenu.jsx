import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";
import twitter from "../assets/twitter.svg";

function LeftMenu() {
  return (
    <>
      <div className="left-menu">
        <nav className="left-tab">
          <a href="https://www.instagram.com/starwars/?hl=en">
            <img src={instagram} width={60} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/StarWars/?locale=en_GB">
            <img src={facebook} width={60} alt="facebook" />
          </a>
          <a href="https://twitter.com/starwars?lang=en">
            <img src={twitter} width={50} alt="twitter" />
          </a>
          <a href="https://www.youtube.com/channel/UCZGYJFUizSax-yElQaFDp5Q">
            <img src={youtube} width={60} alt="youtube" />
          </a>
        </nav>
      </div>
    </>
  );
}

export default LeftMenu;