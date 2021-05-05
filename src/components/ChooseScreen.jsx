import Card from "./Card";
import Navbar from "./Navbar";

const ChooseScreen = () => {
  return (
    <>
      <Navbar backPath={"/"} />
      <div className="project-main-div">
        <h2>
          {" "}
          <span className="char">{">"}</span>Choose a project below:
          <span className="char">_</span>
        </h2>
        <div className="card-container">
          <Card projectName="Cocktail Generator" />
          <Card projectName="Banking Interface" />
          <Card projectName="Task Tracker" />
        </div>
      </div>
    </>
  );
};

export default ChooseScreen;
