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
    </nav>
  );
};

export default Navbar;
