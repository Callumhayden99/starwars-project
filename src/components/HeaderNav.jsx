import { NavLink } from "react-router-dom"

function HeaderNav(){

    return(
        <>
         <nav>
          <NavLink className="home" activeclassname="active" to="/">
            Home
          </NavLink>
          <NavLink className="films" activeclassname="active" to="/films">
            Films
          </NavLink>
          <NavLink className="characters" activeclassname="active" to="/characters">
            Characters
          </NavLink>
          <NavLink className="planets" activeclassname="active" to="/planets">
            Planets
          </NavLink>
          <NavLink className="favourite" activeclassname="active" to="/favourite">
          Favourite
          </NavLink>
          <NavLink className="signup" activeclassname="active" to="/signup">
          Sign up
          </NavLink>
        </nav>
        </>
    )
}
export default HeaderNav