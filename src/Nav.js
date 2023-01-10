import React from 'react';
import { Link } from 'react-router-dom'

function Nav(){
  return (
      <nav>
         <Link to="/">Home</Link>
        <Link to="/createRecipe">Create Recipe</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/randomRecipe">Random Recipe</Link>
      </nav>
  );
}

export default Nav