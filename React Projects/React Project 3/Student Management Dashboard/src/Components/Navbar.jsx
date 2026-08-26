import { NavLink } from "react-router-dom";

function Navbar() {

  return (

    <nav className="navbar">

      <div className="logo">
        🎓 Student Management
      </div>


      <ul className="nav-links">

        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/students">
            Students
          </NavLink>
        </li>

        <li>
          <NavLink to="/add-student">
            Add Student
          </NavLink>
        </li>

        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>

      </ul>

    </nav>

  );
}

export default Navbar;