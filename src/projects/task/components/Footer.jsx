import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="task-footer">
      <p>Task Tracker mini-app &copy; 2021</p>
      <Link to="/tasktracker/about">About</Link>
    </footer>
  );
};

export default Footer;
