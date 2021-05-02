import descriptions from "../descriptions";
import { Link } from "react-router-dom";

const Card = ({ projectName }) => {
  let project = "";

  if (projectName === "Task Tracker") {
    project = "tasktracker";
  } else if (projectName === "Banking Interface") {
    project = "banking";
  } else if (projectName === "Cocktail Generator") {
    project = "cocktail";
  }
  return (
    <Link to={`/${project}`} className="card">
      <h4>{projectName}</h4>
      <p>{descriptions[project]}</p>
    </Link>
  );
};

export default Card;
