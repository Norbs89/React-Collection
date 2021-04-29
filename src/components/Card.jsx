import { Link } from "react-router-dom";

const Card = ({ projectName }) => {
  let project = "";

  if (projectName === "Task Tracker") {
    project = "tasktracker";
  } else if (projectName === "Banking App") {
    project = "banking";
  } else if (projectName === "Cocktail Generator") {
    project = "cocktail";
  }

  return (
    <div>
      <Link to={`/${project}`}>
        <h4>{projectName}</h4>
      </Link>
    </div>
  );
};

export default Card;
