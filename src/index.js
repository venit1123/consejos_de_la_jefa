import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CreateRecipe from './CreateRecipe';
import Recipes from './Recipes';
import RandomRecipe from './RandomRecipe';
import AboutUs from './AboutUs';
import OtherProjects from './OtherProjects';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/createRecipe" element={<CreateRecipe/>}/>
      <Route path="/recipes" element={<Recipes/>}/>
      <Route path="/randomRecipe" element={<RandomRecipe/>}/>
      <Route path="/about" element={<AboutUs/>}>
          <Route path="otherProjects" element={<OtherProjects/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
