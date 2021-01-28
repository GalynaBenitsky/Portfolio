import React from "react";
import GList from "../assets/img/g's-list.png";
import Melody from "../assets/img/melody.png";
import Budget from "../assets/img/budget.png";
import Hospital from "../assets/img/hospital.png";
import Yelp from "../assets/img/yelp.png";
import Forkify from "../assets/img/forkify.png";
import "./css/projects.css";

function Projects() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="flip">
            <div className="front">
              <img className="front-img" src={GList} alt="" />
              <h3 className="text-shadow">G'List</h3>
            </div>
            <div className="back">
              <h2>Graigslist Clone</h2>
              <p>
                Python app built with Django web framework. Includes an API
                using Django REST Framework. Front-end includes HTML5, CSS3 and
                Bootstrap.
              </p>
            </div>
          </div>
          <div className="flip">
            <div className="front">
              <img className="front-img" src={Melody} alt="" />
              <h3 className="text-shadow">Melody</h3>
            </div>
            <div className="back">
              <h2>Music library</h2>
              <p>
                Full CRUD operation ASP.NET MVC 5 framework intergrated with
                Entity Framework 6 SQL database.
              </p>
            </div>
          </div>
          <div className="flip">
            <div className="front">
              <img className="front-img" src={Budget} alt="" />
              <h3 className="text-shadow">Budget</h3>
            </div>
            <div className="back">
              <h2>Budget</h2>
              <p>
                JavaScript app for managing personal budget. Visual part built
                with HTML5, CSS3. No DataBase used.
              </p>
            </div>
          </div>
          <div className="flip">
            <div className="front">
              <img className="front-img" src={Yelp} alt="" />
              <h3 className="text-shadow">YelpCamp</h3>
            </div>
            <div className="back">
              <h2>YelpCamp</h2>
              <p>
                App buit with Node.js, Express, MongoDB, and Bootstrap.
                Passport.js was used to handle authentication.
              </p>
            </div>
          </div>
          <div className="flip">
            <div className="front">
              <img className="front-img" src={Hospital} alt="" />
              <h3 className="text-shadow">Hospital DB</h3>
            </div>
            <div className="back">
              <h2>Hospital DB</h2>
              <p>
                Back-End based on Java JSP, Servlet, DataBase(MySQL). Front-End
                built with HTML5, CSS3 and Bootstrap.
              </p>
            </div>
          </div>
          <div className="flip">
            <div className="front">
              <img className="front-img" src={Forkify} alt="" />
              <h3 className="text-shadow">Forkify</h3>
            </div>
            <div className="back">
              <h2>Forkify</h2>
              <p>
                App interacts with the food2fork API to fetch and display recipe
                food data. Built with modern JavaScript tools: Webpack and
                Babel.
              </p>
            </div>
          </div>
        </div>
        <button className="button">
          <a className="btn-lg" href="https://github.com/GalynaM" role="button">
            See more projects in GitHub{" "}
            <i className="devicon-github-plain colored"></i>
          </a>
        </button>
      </div>
    </>
  );
}
export default Projects;
