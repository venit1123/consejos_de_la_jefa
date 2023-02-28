import { Link, Outlet } from "react-router-dom";
import Nav from "./UiNav";

function AboutUs() {
  return (
    <>
      <Nav />
      <h1>About Us</h1>
      <nav>
        <Link to="./otherProjects">Other Projects</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default AboutUs;
