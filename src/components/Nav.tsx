import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Home
            </Link>

            <Link className="nav-link" to="/createRecipe">
              Create Recipe
            </Link>

            <Link className="nav-link" to="/recipes">
              Recipes
            </Link>

            <Link className="nav-link" to="/randomRecipe">
              Random Recipe
            </Link>

            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
