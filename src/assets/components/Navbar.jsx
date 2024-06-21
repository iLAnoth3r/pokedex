import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");

  return (
    <div className="nav">
      <NavLink className={setActiveClass} to="/">
        <img
          src="https://i.pinimg.com/originals/9e/39/23/9e3923825ba4a4fa967858f980b8460f.png"
          alt=""
        />
      </NavLink>

      <div className="vinculo">
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>{" "}
        <NavLink className={setActiveClass} to="/personajes">
          Personajes
        </NavLink>
      </div>
    </div>
  );
}
