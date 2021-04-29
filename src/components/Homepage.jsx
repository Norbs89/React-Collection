import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <div>
        <Link to="/projects">projects</Link>
      </div>
    </div>
  );
};

export default Homepage;
