import { Link } from "react-router-dom";
import css from "./Home.css";
function Navbar() {
  return (
    <div className="Nav">
      <div className="header">
        <div className="logo">
          <img src="https://flowbite.com/docs/images/logo.svg" alt="img"></img>
          <h1>Geekfood</h1>
        </div>

        <div className="nav">
          <ul>
            <li className="Home">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/quote">Quote</Link>
            </li>
            <li>
              <Link to="/restaurant">Restaurants</Link>
            </li>
            <li>
              <Link to="/food">Food</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <button className="header-button">Get Started</button>
      </div>
    </div>
  );
}
export default Navbar;
