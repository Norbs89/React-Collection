import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="homepage-main-div">
      <h1>
        <span className="char">{">"}</span>React Collection
        <span className="char">_</span>
      </h1>
      <p>
        3 apps built with the popular front-end library React.js (and it's
        various dependencies).
      </p>

      <Link to="/projects" className="bttn bttn-main">
        App Selector
      </Link>
    </div>
  );
};

export default Homepage;
