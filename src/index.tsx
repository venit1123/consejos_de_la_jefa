import ReactDOM from "react-dom/client";
import App from "./components/App";
import CreateRecipe from "./components/CreateRecipe";
import Recipes from "./components/Recipes";
import RandomRecipe from "./components/RandomRecipe";
import AboutUs from "./components/AboutUs";
import OtherProjects from "./components/OtherProjects";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root"),
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/createRecipe" element={<CreateRecipe />} />
      <Route path="/recipes" element={<Recipes initialRecipies={[]} />} />
      <Route path="/randomRecipe" element={<RandomRecipe />} />
      <Route path="/about" element={<AboutUs />}>
        <Route
          path="otherProjects"
          element={<OtherProjects />}
        />
      </Route>
    </Routes>
  </BrowserRouter>,
);
