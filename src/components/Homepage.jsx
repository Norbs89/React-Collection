import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="homepage-main-div">
      <h1>React Collection</h1>
      <p>
        3 apps built with the popular front-end library React.js (and it's
        various dependencies).
      </p>

      <Link to="/projects">
        <button>App Selector</button>
      </Link>
    </div>
  );
};

export default Homepage;
