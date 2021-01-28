import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  function refreshPage() {
    window.location.reload(true);
  }

  return (
    <>
      <div className="container">
        <ul onClick={refreshPage}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Navigation;
