import { Link } from "react-router-dom";

const Navbar = ({ backPath }) => {
  return (
    <nav className="navbar">
      <Link to={backPath} className="nav-text">
        Back
      </Link>
      <Link to="/" className="nav-text">
        Home
      </Link>
      <Link to="/about" className="nav-text">
        About
      </Link>
    </nav>
  );
};

export default Navbar;
